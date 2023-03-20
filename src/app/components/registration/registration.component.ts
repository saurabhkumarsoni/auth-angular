import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup | any
  constructor(private fb: FormBuilder,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: [''],
      email: [''],
      number: [''],
      password: [''],
      confirmPassword: [''],
      returnSecureToken: true
    })
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    if(this.registrationForm.valid){
      this.authService.signUp(this.registrationForm.value).subscribe((res) =>{
        console.log(res);
      })
    }

  }

}
