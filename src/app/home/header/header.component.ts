import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string;

  constructor(private storage: StorageService, private router: Router) {
    this.name = this.storage.get('name');
  }

  ngOnInit() {
  }

  logout() {
    this.storage.delete('name');
    this.storage.delete('token');
    this.router.navigateByUrl('login');
  }

}

