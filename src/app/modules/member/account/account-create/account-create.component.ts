import {Component, OnInit} from "@angular/core";
import {BsModalRef} from "ngx-bootstrap";
import {ToasterService} from "angular2-toaster";
import { MemberService } from "../../../../services/member.service";
import { Member } from "../../../../models/member.model";

@Component({
  selector: 'app-member-account-create',
  templateUrl: 'account-create.component.html'
})
export class MemberAccountCreateComponent implements OnInit {

  model: Member;
  isSuccessful: boolean;

  constructor(public bsModalRef: BsModalRef, private service: MemberService, private toast: ToasterService) {
    this.model = new Member();
    // this.model.is_executing_new_accounts = true;
    this.isSuccessful = false;
  }

  ngOnInit() {
  }

  create() {
    this.service.store(this.model).subscribe((data: Member)=> {
      this.model = data;
      this.toast.pop('success', 'Thêm cộng tác viên', 'Thành công');
      this.isSuccessful = true;
      this.close();
    }, ()=>this.toast.pop('error', 'Thêm cộng tác viên', 'Thất bại'));
  }

  close() {
    this.bsModalRef.hide();
  }

}
