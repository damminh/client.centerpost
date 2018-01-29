import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ControlSidebarComponent} from "./control-sidebar/control-sidebar.component";
import {LeftSideComponent} from "./left-side/left-side.component";
import {ModulesModule} from "../modules/modules.module";

@NgModule({
  imports: [
    ModulesModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ControlSidebarComponent,
    LeftSideComponent
  ]
})
export class HomeModule {
}
