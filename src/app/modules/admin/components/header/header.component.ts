import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUser } from '../profile/profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user:any = [];

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  constructor() { }

  ngOnInit() {
    this.user = {
      name: 'Emilio Verdines'
    };
  }

  toggleSideNav(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus)
  }
 



 
 

}
