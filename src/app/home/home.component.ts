import {Component, OnInit, OnDestroy} from '@angular/core';
import {TitleService} from "../services/title.service";
declare var AdminLTE: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  bodyClasses: string[] = ['skin-blue-light', 'sidebar-mini'];
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];
  title: string;
  sub: any;

  constructor(private titleService: TitleService) {
    this.title = 'Welcome to our system';
  }

  ngOnInit() {
    AdminLTE.init();
    this.bodyClasses.forEach((value: string)=>this.body.classList.add(value));
    this.sub = this.titleService.titleSubject$.subscribe((newTitle: string)=>this.title = newTitle);
  }

  ngOnDestroy() {
    this.bodyClasses.forEach((value: string)=>this.body.classList.remove(value));
    this.sub.unsubscribe();
  }

}
