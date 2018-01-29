import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {DocumentComponent} from "./document/document.component";

const routing: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'members',
        loadChildren: 'app/modules/member/member.module#MemberModule'
      },
    ]
  }

];


@NgModule({
  imports: [
    RouterModule.forChild(routing)
  ],
  exports: [
    RouterModule
  ],
  declarations: [DocumentComponent]
})
export class ModulesModule {
}
