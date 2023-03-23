import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api= 'https://auth-angular-50dba-default-rtdb.firebaseio.com/'

  constructor(private http: HttpClient, private authService: AuthService) { }


  getUserList(){
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user =>{
        return this.http.get(`${this.api}empData.json`, {
          params: new HttpParams().set('auth', user?.token)
        })
       }),
       map(resData =>{
        const userArray = [];
        for(const key in resData){
          if(resData.hasOwnProperty(key)){
            userArray.push({userId:key, ...resData[key]})
          }
        }
        return userArray
       })
    )
  }

}
