import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  @Input()
  sideNavStatus: boolean = false;

     public list: List[] = [
    {
      number: 1,
      name: 'Home',
      icon: 'fa-solid fa-house',
      routerLink: 'home'
    },
    {
      number: 2,
      name: 'Analytics',
      icon: 'fa-solid fa-chart-line'
    },
    {
      number: 3,
      name: 'Logs',
      icon: 'fa-solid fa-chart-simple',
      routerLink: 'logs',
    },
    {
      number: 4,
      name: 'About',
      icon: 'fa-solid fa-circle-info'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

export interface List {
  number: number;
  name: string;
  icon: string;
  routerLink?: string
}
