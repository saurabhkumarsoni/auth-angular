import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  sideNavStatus: boolean = false




  constructor() { }

  ngOnInit() {
    
  }

}
