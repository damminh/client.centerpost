import {AppRoutingModule} from "./app-routing/app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {ServicesModule} from "./services/services.module";
import {LoginComponent} from "./login/login.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ToasterModule} from "angular2-toaster";
import {HttpClientModule} from "@angular/common/http";
import {NgHttpLoaderModule} from "ng-http-loader/ng-http-loader.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToasterModule,
    HttpClientModule,
    NgHttpLoaderModule,
    ServicesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
