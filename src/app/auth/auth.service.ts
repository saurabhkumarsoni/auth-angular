import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { config } from '../config';
import { BehaviorSubject, catchError, Subject, tap } from 'rxjs';
import { AuthResponse, SignIn, SignUp } from '../appInterface/auth-response-interface';

import { ErrorService } from '../services/error.service';
import { User } from '../appModels/user.model';

@Injectable()
export class AuthService {

 

  user = new BehaviorSubject<User | any>(null);

  private tokenExpirationTimer: any;
  
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    private errorService: ErrorService
  ) {
    
  }


  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  signUp(signUp: SignUp){
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${config.API_KEY}`,signUp)
    .pipe(catchError(err =>{
      return this.errorService.handleError(err);
    }),
    tap(res =>{
      this.authenticatedUser(res.email, res.localId, res.idToken, +res.expiresIn)
    })
    )
  }

  signIn(signIn: SignIn){
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.API_KEY}`, signIn)
    .pipe(catchError(err =>{
      return this.errorService.handleError(err);
    }),
    tap(res =>{
      this.authenticatedUser(res.email, res.localId, res.idToken, +res.expiresIn)
    })
    )
  }

  autoSignIn(){
    const userData = JSON.parse(localStorage.getItem('userData')!)

    if(!userData){
      return;
    }

    const loggedInUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
    if(loggedInUser.token){
    this.user.next(loggedInUser);
    const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
    this.autoSignOut(expirationDuration);
    }
  }

  private authenticatedUser(email: string, userId: string, token: string, expiresIn: number){
    const expirationDate = new Date(new Date().getTime() + expiresIn*1000)
    const user = new User(email, userId, token, expirationDate);
    console.log('user', user);
    this.user.next(user);
    this.autoSignOut(expiresIn*1000);
    localStorage.setItem('userData', JSON.stringify(user))
  }

  signOut(){
    this.user.next(null);
    this.router.navigate(['']);
    localStorage.removeItem('userData')
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }


  autoSignOut(expirationDuration: number){
    this.tokenExpirationTimer = setTimeout(()=>{
      console.log('expiry token')
      this.signOut()
    }, expirationDuration)
  }

  
  
}