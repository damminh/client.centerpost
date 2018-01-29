import {Component, OnInit} from "@angular/core";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {DateFormatPipe} from "angular2-moment";
import {ReportMemberService} from "../../../../services/report-member.service";
import {MemberReportListConfig} from "../../../../models/member-report-list-config.model";
import {MemberService} from "../../../../services/member.service";
import {Member} from "../../../../models/member.model";
import {MemberJob} from "../../../../models/member-job.model";
import {PreviewArticleComponent} from "../../../preview-articles/preview-article.component";
import {BaseModalComponent} from "../../../../_common/index";
import {MemberJobService} from "../../../../services/member-job.service";
import {ToasterService} from "angular2-toaster/src/toaster.service";
import * as moment from "moment";

@Component({
  selector: 'app-report-list',
  templateUrl: './report-member.component.html',
  styleUrls: ['./report-member.component.css']
})

export class MemberReportListComponent implements OnInit {

  list: any[];

  config: MemberReportListConfig = new MemberReportListConfig();
  pipe: any = new DateFormatPipe();

  members: Member[];

  fromDate: Date;
  toDate: Date;
  approvedFilter: number;
  isSaveFilter: number;
  isAccountFilter: number;
  memberFilter: number;

  page: number;
  limit: number = 50;
  hasMore: boolean = true;

  isCheckAll: boolean = false;
  countChecked: number = 0;


  statusSavedButton: boolean = false;
  statusApprovedButton: boolean = false;
  statusRejectedButton: boolean = false;


  constructor(private service: ReportMemberService,
              private memberService: MemberService,
              private modalService: BsModalService,
              private memberJobService: MemberJobService,
              private toast: ToasterService,) {
    this.list = [];
    this.page = 1;
    let firstDayOfMonth = moment();
    firstDayOfMonth.date(1);
    this.fromDate = firstDayOfMonth.toDate();
    this.toDate = moment().toDate();
    this.memberFilter = 0;
    this.isAccountFilter = 0;
    this.approvedFilter = 2;
    this.isSaveFilter = 1;
  }

  ngOnInit() {
    this.loadMembers();
  }

  loadMembers() {
    this.memberService.load({}).subscribe((data: any) => {
      this.members = data;
    })
  }

  load(changed: boolean) {
    let params: any = {
      from_date: moment(this.fromDate).format('YYYY-MM-DD'),
      to_date: moment(this.toDate).format('YYYY-MM-DD'),
      is_save: this.isSaveFilter,
      is_account: this.isAccountFilter,
      is_approved: this.approvedFilter,
      page: this.page,
      limit: this.limit
    };
    this.statusSavedButton = this.isSaveFilter == 1
      && this.approvedFilter == 1
      && this.isAccountFilter == 0;

    this.statusApprovedButton = this.approvedFilter != 1 && this.isAccountFilter == 0;

    this.statusRejectedButton = this.approvedFilter != 0 && this.isAccountFilter == 0;

    if (this.memberFilter > 0) {
      params.member_id = this.memberFilter;
    }
    this.service.load_list_account(params).subscribe((data: any) => {
      this.hasMore = data.length == this.limit;
      if (!changed) {
        this.list = this.list.concat(data);
      } else {
        this.list = data;
      }
    })
  }


  submit() {
    this.page = 1;
    this.isCheckAll = false;
    this.load(true);
  }

  detail(item: MemberJob) {
    let modalRef: BsModalRef = this.modalService.show(PreviewArticleComponent, {class: 'modal-huge'});
    let modal = <BaseModalComponent>modalRef.content;
    modal.setModel(item.recommend);
  }

  approved() {
    let ids = [];
    for (let job of this.list) {
      if (job.checked) {
        ids.push(job.id);
      }
    }
    this.memberJobService.update_list_status(ids, 1).subscribe((data) => {
      this.list = this.list.filter(el=> {
        return ids.indexOf(el.id) == -1;
      })
      this.toast.pop('success', 'Đổi trạng thái', 'Thành công');
    }, () => this.toast.pop('error', 'Đổi trạng thái', 'Thất bại'));
  }

  rejected() {
    let ids = [];
    for (let job of this.list) {
      if (job.checked) {
        ids.push(job.id);
      }
    }
    this.memberJobService.update_list_status(ids, 0).subscribe((data) => {
      this.list = this.list.filter(el=> {
        return ids.indexOf(el.id) == -1;
      })
      this.toast.pop('success', 'Đổi trạng thái', 'Thành công');
    }, () => this.toast.pop('error', 'Đổi trạng thái', 'Thất bại'));
  }

  saveAccount() {
    let ids = [];
    for (let job of this.list) {
      if (job.checked) {
        ids.push(job.id);
      }
    }
    this.memberJobService.convertToAccount(ids).subscribe((data: any) => {
      this.list = this.list.filter(el=> {
        return ids.indexOf(el.id) == -1;
      })
      this.toast.pop('success', 'Thêm tài khoản', 'Thành công');
    }, () => this.toast.pop('error', 'Hệ thống', 'Xảy ra lỗi'))
  }

  seeMore() {
    this.page++;
    this.isCheckAll = false;
    this.load(false);
  }

  checkAll() {
    this.countChecked = this.isCheckAll ? this.list.length : 0;
    for (let job of this.list) {
      job.checked = this.isCheckAll;
    }
  }

  checkItem(item) {
    if (item.checked) {
      this.countChecked++;
    } else {
      this.countChecked--;
    }
    this.isCheckAll = this.countChecked == this.list.length;
  }

}
