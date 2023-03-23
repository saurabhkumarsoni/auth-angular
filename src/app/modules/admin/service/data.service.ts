import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as countrycitystatejson from 'countrycitystatejson';
@Injectable()
export class DataService {
 private countryData = countrycitystatejson;

  constructor() { }

  getSales() {
    return of({
      "year1": {
        "volumeSales": "0.09",
        "valueSales": "1.23"
      },
      "year2": {
        "volumeSales": "0.11",
        "valueSales": "1.56"
      },
      "year3": {
        "volumeSales": "0.12",
        "valueSales": "1.69"
      },
      "year4": {
        "volumeSales": "0.12",
        "valueSales": "1.64"
      },
      "year5": {
        "volumeSales": "0.10",
        "valueSales": "1.41"
      },
      "total": {
        "volumeSales": "0.55",
        "valueSales": "7.53"
      }
    });
  }



  getCountries() {
    return this.countryData.getCountries();
  }

  getStatesByCountry(countryShotName: string) {
    return this.countryData.getStatesByShort(countryShotName);
  }

  getCitiesByState(country: string, state: string) {
    return this.countryData.getCities(country, state);
  }

}