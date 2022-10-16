import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage.dashboard',
  templateUrl: './mainpage.dashboard.component.html',
  styleUrls: ['./mainpage.dashboard.component.scss']
})
export class MainpageDashboardComponent implements OnInit {

  sideNavStstus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
