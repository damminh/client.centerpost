import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BsDatepickerModule} from "ngx-bootstrap";
import {MomentModule} from "angular2-moment";
import { MemberComponent } from "./member.component";
import { MemberAccountComponent } from "./account/account.component";
import { MemberAccountCreateComponent } from "./account/account-create/account-create.component";
import { MemberAccountEditComponent } from "./account/account-edit/account-edit.component";
import { MemberReportListComponent } from "./report/list-account/report-member.component";
import { MemberReportSumComponent } from "./report/sum-account/report-member.component";
import { MemberService } from "../../services/member.service";
import {ModalModule, PaginationModule, PopoverModule} from "ngx-bootstrap";
import { TabsModule } from 'ngx-bootstrap/tabs';
import {ConfirmationPopoverModule} from "angular-confirmation-popover";
import { PreviewArticleComponent } from "../preview-articles/preview-article.component";
import {RatingModule} from "ngx-rating";
import { PreviewArticleModule } from "../preview-articles/preview-article.module";

const routing: Routes = [
  {
    path: '',
    component: MemberComponent 
  }
]
@NgModule({
  imports: [
    PreviewArticleModule,
    RatingModule,
    TabsModule.forRoot(),
    FormsModule,
    CommonModule,
    BsDatepickerModule.forRoot(),
    MomentModule,
    RouterModule.forChild(routing),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ConfirmationPopoverModule.forRoot()
  ],
  declarations: [
    MemberComponent,
    MemberAccountComponent,
    MemberAccountCreateComponent,
    MemberAccountEditComponent,
    MemberReportListComponent,
    MemberReportSumComponent,
  ],
  entryComponents: [
    MemberAccountCreateComponent,
    MemberAccountEditComponent
  ],
  providers: [
  ],
  exports: [RouterModule]
})
export class MemberModule {
}
