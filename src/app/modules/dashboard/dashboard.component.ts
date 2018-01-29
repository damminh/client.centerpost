import {Component, OnInit} from "@angular/core";
import {Dashboard} from "../../models/report.model";
import {ReportService} from "../../services/report.service";
import {TitleService} from "../../services/title.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  constructor(private service: ReportService, private title: TitleService) {
    this.title.setTitle('Dashboard');
  }

  ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.dashboard = data;
    });
  }

  dashboard: Dashboard;
}
