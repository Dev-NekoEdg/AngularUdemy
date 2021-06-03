import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country';
import { map } from 'rxjs/operators';
import { CountryMin } from '../models/country-min';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  urlService: string = 'https://restcountries.eu/rest/v2/lang/es';

  constructor(
    private http: HttpClient
  ) { }


  getCountries(): Observable<Country[]>{

    return this.http.get<Country[]>(this.urlService);
  }

  
}
