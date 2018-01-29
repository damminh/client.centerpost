import {Component, OnInit} from "@angular/core";
import {BsModalRef} from "ngx-bootstrap";
import {ToasterService} from "angular2-toaster";
import { MemberService } from "../../../../services/member.service";
import { Member } from "../../../../models/member.model";

@Component({
  selector: 'app-member-account-edit',
  templateUrl: 'account-edit.component.html'
})
export class MemberAccountEditComponent implements OnInit {

  model: Member;
  isSuccessful: boolean;

  constructor(public bsModalRef: BsModalRef, private service: MemberService, private toast: ToasterService) {
    this.model = new Member();
    // this.model.is_executing_new_accounts = true;
    this.isSuccessful = false;
    this.model.reset = 0;
  }

  ngOnInit() {
  }

  edit() {
      console.log(this.model);
    this.service.update(this.model).subscribe((data: Member)=> {
      this.model = data;
      this.toast.pop('success', 'Sửa cộng tác viên', 'Thành công');
      this.isSuccessful = true;
      this.close();
    }, ()=>this.toast.pop('error', 'Sửa cộng tác viên', 'Thất bại'));
  }

  close() {
    this.bsModalRef.hide();
  }

}
