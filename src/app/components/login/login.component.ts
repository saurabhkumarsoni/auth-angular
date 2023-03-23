import { Component, OnInit } from '@angular/core';
import { FirestoreError } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from '../../appInterface/auth-response-interface';
import { ErrorMessage } from '../../appInterface/error.response.interface';
import { AuthService } from '../../auth/auth.service';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  result: any;
  loginForm!: FormGroup;
  authObservable!: Observable<AuthResponse>
  errMsg =this.errorService.errorsMessage
  error: any;
  constructor(private fb: FormBuilder, private authService: AuthService, private errorService: ErrorService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.initializeLoginForm();
  }

 initializeLoginForm(){
  this.loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    returnSecureToken: true,
  })
}

onSubmit(){
  this.calculate(3,5);
  if(this.loginForm.valid){
    this.authObservable =  this.authService.signIn(this.loginForm.value);
    this.authObservable.subscribe((res: AuthResponse) =>{
      debugger;
      this.result = res;
      this.router.navigate(['admin']);
    }, 
    (err) =>{
      console.log(err);
      // this.error = this.errMsg[err];
      this.error = err;
    })
  }
}

calculate(a,b){
  return a+b;
}
sendMessage(){
  return 'Hello'
}
}
