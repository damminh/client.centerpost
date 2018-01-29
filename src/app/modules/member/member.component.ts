import {Component, OnInit} from "@angular/core";
import {BsModalRef} from "ngx-bootstrap";
import {FormGroup} from "@angular/forms";
import {DateFormatPipe} from "angular2-moment";
import { TitleService } from "../../services/title.service";
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html'
})

export class MemberComponent implements OnInit {

  constructor(private title: TitleService) {
    this.title.setTitle('Cộng tác viên');

  }

  ngOnInit() {
    // this.load();
  }

}
