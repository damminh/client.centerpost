import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {GuardService} from "../services/guard.service";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule',
        canActivate: [GuardService],
        canActivateChild: [GuardService]
      },
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
