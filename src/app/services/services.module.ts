import {NgModule} from '@angular/core';
import {AuthService} from "./auth.service";
import {InterceptorService} from "./interceptor.service";
import {TitleService} from "./title.service";
import {StorageService} from "./storage.service";
import {GuardService} from "./guard.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {CommentService} from "./comment.service";
import {CategoriesService} from "./Categories.service";
import {FbPageService} from "./fbPage.service";
import {FbPostService} from "./fbPost.service";
import {KeyWordService} from "./keyWord.service";
import {ReportService} from "./report.service";
import {DocumentService} from "./document.service";
import {RecommendUrlService} from "./recommend-url.service";
import {ExcelService} from "./excel.service";
import {PreviewArticleService} from "./preview-article.service";
import { ReportMemberService } from './report-member.service';
import { MemberService } from './member.service';
import { MemberJobService } from './member-job.service';

const ALL_SERVICES: any = [
  AuthService, CommentService, CategoriesService, FbPageService, FbPostService, KeyWordService,
  ReportService, TitleService, StorageService, GuardService, DocumentService, RecommendUrlService,
  ExcelService, PreviewArticleService, ReportMemberService, MemberService, MemberJobService
];

@NgModule({
  imports: [],
  declarations: [],
  providers: [ALL_SERVICES,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    }],
  exports: []
})
export class ServicesModule {
}
