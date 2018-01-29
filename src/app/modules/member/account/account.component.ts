import {Component, OnInit} from "@angular/core";
import {AppPagination} from "../../../models/pagination";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {ToasterService} from "angular2-toaster";
import {TitleService} from "../../../services/title.service";
import {PaginationOutput} from "../../../models/pagination-output";
import {Member} from "../../../models/member.model";
import {MemberService} from "../../../services/member.service";
import {MemberAccountCreateComponent} from "./account-create/account-create.component";
import {MemberAccountEditComponent} from "./account-edit/account-edit.component";

@Component({
  selector: 'app-member-account',
  templateUrl: 'account.component.html',
  styleUrls: ['account.component.css']
})
export class MemberAccountComponent implements OnInit {

  pagination: AppPagination;
  list: Member[];
  searchText: string;
  nextPage: number;
  bsModalRef: BsModalRef;

  constructor(private service: MemberService, private toast: ToasterService, private modalService: BsModalService, private title: TitleService) {
    this.title.setTitle('Cộng tác viên');
    this.pagination = new AppPagination();
    this.nextPage = this.pagination.currentPage;
    this.list = [];
    this.searchText = '';
  }

  ngOnInit() {
    this.load();
  }

  load() {
    let params: any = {
      limit: this.pagination.itemsPerPage,
      page: this.pagination.currentPage,
      search: this.searchText
    };
    this.service.load(params).subscribe((data: PaginationOutput)=> {
        this.list = data.data;
        this.pagination.set(data);
      }, err=>console.log(err)
    );
  }


  search() {
    this.load();
  }

  clear() {
    this.searchText = '';
  }

  create() {
    this.bsModalRef = this.modalService.show(MemberAccountCreateComponent, {class: 'modal-sm'});
    let sub = this.modalService.onHidden.subscribe((reason: string)=> {
      if (this.bsModalRef.content.isSuccessful) {
        let itemCreated: Member = this.bsModalRef.content.model;
        this.list.unshift(itemCreated);
      }
      sub.unsubscribe();
    });
  }

  edit(item: Member, index: number) {
    this.bsModalRef = this.modalService.show(MemberAccountEditComponent, {class: 'modal-sm'});
    this.bsModalRef.content.model = Object.assign({}, item);
    let sub = this.modalService.onHidden.subscribe((reason: string)=> {
      if (this.bsModalRef.content.isSuccessful) {
        let itemUpdated: Member = this.bsModalRef.content.model;
        this.list.splice(index, 1, itemUpdated);
      }
      sub.unsubscribe();
    });
  }

  remove(item: Member, index: number) {
    this.service.destroy(item.id).subscribe(()=> {
      this.list.splice(index, 1);
      this.toast.pop('success', 'Xóa cộng tác viên', 'Thành công');
    }, err=>this.toast.pop('error', 'Xóa cộng tác viên', 'Thất bại'));

  }

  pageChanged(event: any) {
    this.pagination.currentPage = event.page;
    this.nextPage = this.pagination.currentPage;
    this.load();
  }


  goToPage() {
    this.pagination.currentPage = this.nextPage;
  }

}
