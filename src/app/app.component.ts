import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
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

  constructor(private authService: AuthService, private router: Router,private loadingBar: LoadingBarService) { }

  ngOnInit() {
    this.loadingBar.start();
    this.authService.autoSignIn();
    this.authService.user.subscribe((res) =>{
      if(res){
        // console.log('djkkndjnkjndkjndkjd',res.token)
        // this.router.navigate(['/admin'])
        this.loadingBar.complete();
      }
    })
  }


}
