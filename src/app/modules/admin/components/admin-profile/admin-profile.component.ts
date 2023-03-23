import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import ISO6391 from 'iso-639-1';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../service/data.service';
interface Country {
  shortName: string;
  name: string;
}
@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
  adminProfile!: FormGroup
  userDetails: any;

  countries: Country[];
  states: string[];
  cities: string[];

  country = new FormControl(null, [Validators.required]);
  state = new FormControl({ value: null, disabled: true }, [
    Validators.required,
  ]);
  city = new FormControl({ value: null, disabled: true }, [
    Validators.required,
  ]);

  token = JSON.parse(localStorage.getItem('userData'))._token;

  constructor(private fb: FormBuilder, private authService: AuthService, private dataService: DataService) { 
    this.countries = this.dataService.getCountries();
    
  }

  ngOnInit(): void {
    this.authService.userInfo.subscribe((res: any) =>{
      this.userDetails = res;
      this.adminProfile.patchValue(
        {
          name: this.userDetails.displayName,
          photoUrl: 'https://media.licdn.com/dms/image/C4D03AQFo3b6Ib0-BrA/profile-displayphoto-shrink_800_800/0/1654593902538?e=2147483647&v=beta&t=erkr34bXWK-NH6AD2V5LcQ79ILsN1XVGIQLFRvRNNMI',
          mobile: '9038111876',
          email: this.userDetails.email,
          designation: 'Angular Developer',
          address: {
            country: 'India',
            state: 'Bihar',
            city: 'Aurangabad',
            postalCode: '876545'
          }
        })
    })

    this.getCountries();
    this.getState();
    this.initializeForm();


  }

  getCountries(){
    this.country.valueChanges.subscribe((country) => {
      this.state.reset();
      this.state.disable();
      if (country) {
        this.states = this.dataService.getStatesByCountry(country);
        this.state.enable();
      }
  })
}

getState(){
  this.state.valueChanges.subscribe((state) => {
    this.city.reset();
    this.city.disable();
    if (state) {
      this.cities = this.dataService.getCitiesByState(this.country.value, state);
      this.city.enable();
    }
  });
}



  


  initializeForm(){
    this.adminProfile = this.fb.group({
      name: [],
      photoUrl: [],
      mobile:[],
      email:[],
      designation: [],
      address:  this.fb.group({
        country: this.country,
        state: this.state,
        city: this.city,
        postalCode: []
        
      })
    })
  }

  onSubmit(){
    if(this.adminProfile.valid){
      const data = {token: this.token, ... this.adminProfile.value}
      this.authService.updateProfile(data).subscribe((res) =>{
        this.authService.getUserData(this.token);
      })
    }
  }

}

