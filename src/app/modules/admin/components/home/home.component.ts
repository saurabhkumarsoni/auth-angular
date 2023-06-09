import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usersList: any;
  userDetails: any

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserList().subscribe(res =>{
      this.usersList = res;      
    })

    this.authService.userInfo.subscribe(res =>{
      this.userDetails = res;
    })
  }




}
