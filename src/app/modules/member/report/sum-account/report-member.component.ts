import {Component, OnInit} from "@angular/core";
import {AppPagination} from "../../../../models/pagination";
import {Statistic} from "../../../../models/report.model";
import {BsModalRef} from "ngx-bootstrap";
import {ReportService} from "../../../../services/report.service";
import {TitleService} from "../../../../services/title.service";
import {FormGroup} from "@angular/forms";
import {ReportListConfig} from "../../../../models/report-list-config.model";
import {DateFormatPipe} from "angular2-moment";
import {ReportMemberService} from "../../../../services/report-member.service";
import {Member} from "../../../../models/member.model";
import {ExcelService} from "../../../../services/excel.service";

@Component({
  selector: 'app-report-sum',
  templateUrl: './report-member.component.html',
  styleUrls: ['./report-member.component.css']
})

export class MemberReportSumComponent implements OnInit {

  pagination: AppPagination;
  searchText: string;
  nextPage: number;
  bsModalRef: BsModalRef;
  value_from: Date;
  value_from_string: string;
  value_to: Date;
  value_from_to: string;
  total: Statistic;
  form: FormGroup;
  config: ReportListConfig = new ReportListConfig();
  pipe: any = new DateFormatPipe();
  sum_all_account: number;
  list: any[];
  list_export: any[];
  today: Date;

  constructor(private service: ReportMemberService,
              private title: TitleService,
              private excelService: ExcelService) {
    this.pagination = new AppPagination();
    this.nextPage = this.pagination.currentPage;
    this.searchText = '';
    this.today = new Date();
    this.value_from = new Date(this.today.getFullYear(), this.today.getMonth(), 1);
    this.value_to = new Date();
    this.sum_all_account = 0;
    this.list = [];
    this.list_export = [];
  }

  ngOnInit() {
    // this.load();
  }

  changeFromDate(e) {

  }

  load() {
    this.service.load_sum_account(this.config).subscribe((data: any) => {
      this.list = data;
    })
  }

  exportExcel() {
    let lenght = this.list.length;
    for (let i = 0; i < lenght; i++) {
      let ob = {
        "STT": i,
        "Tên CTV": this.list[i].name,
        "Lưu lại chính xác": this.list[i].status11,
        "Lưu lại không chính xác": this.list[i].status10,
        "Bỏ qua chính xác": this.list[i].status01,
        "Bỏ qua không chính xác": this.list[i].status00,
        "Tổng số": this.list[i].total,
      }
      this.list_export.push(ob);
    }
    this.excelService.exportAsExcelFile(this.list_export, "report");
  }

  clear() {
    this.searchText = '';
  }

  submit() {
    if (this.value_from) this.config.from_date = this.pipe.transform(this.value_from, 'YYYY-MM-DD');
    if (this.value_to) this.config.to_date = this.pipe.transform(this.value_to, 'YYYY-MM-DD');
    this.load();
  }

}
