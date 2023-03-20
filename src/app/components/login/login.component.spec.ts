import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthService } from 'src/app/auth/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [AuthService],
      imports: [HttpClientModule, AppRoutingModule, FormsModule,
        ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it('shold call calculate method', () =>{
  spyOn(component, 'calculate');
  component.onSubmit();
  expect(component.calculate).toHaveBeenCalled();
 })

it('', () =>{
  let service = fixture.debugElement.injector.get(AuthService);

  spyOn(service, 'signIn').and.callFake(() =>{
    return of({
      idToken: '1',
    email: 'sk',
    refreshToken: 'string',
    expiresIn: 'string',
    localId: 'string',
    })
  })

  component.onSubmit();
  expect(component.result).toEqual({
   'result': 200
  })

  spyOn(component, 'initializeLoginForm').and.stub();
})


it('call send message', () =>{
  expect(component.sendMessage()).toBe('Hello')
})


it('shuld call login method', ()=>{
  let service = fixture.debugElement.injector.get(AuthService);

  spyOn(service, 'signIn').and.callFake(() =>{
    return {
      'result': 200,
    }
  })

  component.onSubmit();
  expect(component.onSubmit()).toHaveBeenCalled();
})


});
