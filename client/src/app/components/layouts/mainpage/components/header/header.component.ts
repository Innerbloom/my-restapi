import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {AuthService} from "../../../../../services/auth.service";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  today = new Date();
  myDate = '';


  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;



  constructor(private authService: AuthService) {
    this.myDate = formatDate(this.today, 'd.M.yy h:mm a', 'en-US', 'UTS+3')
  }


  ngOnInit(): void {
  }

  logout() {
    this.authService.logout()
  }


  SideNavToggled() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

}
