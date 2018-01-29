import {NgModule, ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {ReportService} from "../../services/report.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
const reportRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: DashboardComponent,
  },
]);
const routing: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
]
@NgModule({
  imports: [
    reportRouting,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routing),

  ],
  declarations: [DashboardComponent],
  providers: [ReportService],
  exports: [RouterModule]
})
export class DashboardModule {
}
