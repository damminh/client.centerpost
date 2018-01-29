import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgHttpLoaderModule} from "ng-http-loader/ng-http-loader.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {
  PaginationModule,
  PopoverModule,
  TabsModule,
  DatepickerModule,
  TimepickerModule,
  TooltipModule
} from "ngx-bootstrap";
import {ToasterModule} from "angular2-toaster";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgHttpLoaderModule,
    FormsModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    TabsModule.forRoot(),
    DatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    ToasterModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    HttpClientModule,
    NgHttpLoaderModule,
    FormsModule,
    ModalModule,
    PaginationModule,
    PopoverModule,
    TabsModule,
    DatepickerModule,
    TimepickerModule,
    TooltipModule,
    BrowserAnimationsModule,
    ToasterModule
  ],
})
export class GeneralModule {
}
