import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Auth-Angular';;
  sideNavStatus: boolean = false




  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.autoSignIn();
  }


}
