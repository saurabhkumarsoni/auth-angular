import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

 
userDeatils: any;
  constructor( private authService: AuthService) { }

  ngOnInit() {
    this.authService.userInfo.subscribe(res =>{
      this.userDeatils = res;
    })
  }

  signOut() {
    this.authService.signOut();
  }

}
