import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../auth/auth.service';

export interface IUser {
  name?: string;
}

export function isDefined(value: any): boolean {
  return value !== undefined && value !== null;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() user: IUser = {};

  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  initNameIcon = () => {
    if(isDefined(this.user) && isDefined(this.user.name)) {
      const breakName = this.user.name?.split(' ');
      return breakName?.length === 1 ? breakName[0].substr(0, 3) : breakName?.reduce((acc, curr) => acc + curr.substr(0, 1), '').substr(0, 3);
    }
    return 'U';
  }

 

  onShowProfile = () => {
   this.router.navigate(['admin/profile'], {queryParams: {editMode: true}})
  }

  onLogout() {
    this.authService.logout();
  }

}
