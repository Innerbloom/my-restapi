import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() sideNavStatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'Home',
      icon: 'fa-solid fa-house'
    },
    {
      number: '2',
      name: 'Analytics',
      icon: 'fa-solid fa-chart-line'
    },
    {
      number: '3',
      name: 'Products',
      icon: 'fa-solid fa-box'
    },
    {
      number: '4',
      name: 'About',
      icon: 'fa-solid fa-circle-info'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
