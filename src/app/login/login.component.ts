import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {Account} from "../models/account.model";
import {StorageService} from "../services/storage.service";
import {ToasterService} from "angular2-toaster";
@Component({
  selector: 'login-page',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit,OnDestroy {

  user: Account;
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor(private route: ActivatedRoute, private router: Router,
              private authService: AuthService, private storage: StorageService,
              private toast: ToasterService) {
  }

  ngOnInit() {
    this.user = {
      username: '',
      password: ''
    }
    this.body.classList.add('login-page');
  }

  login() {
    this.authService.login(this.user).subscribe((data: {name: string,token: string})=> {
      this.storage.set('name', data.name);
      this.storage.set('token', data.token);
      this.router.navigateByUrl('');
      this.toast.pop('success', 'Đăng nhập', 'Thành công');
    }, ()=>this.toast.pop('error', 'Đăng nhập', 'Thất bại'));
  }

  ngOnDestroy() {
    this.body.classList.remove('login-page');
  }
}
