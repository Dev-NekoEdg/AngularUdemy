import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // import para pode trabajar con APIs.
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlService = 'https://eft.evertecinc.co:5020';

  constructor(private http: HttpClient ) { }


  getAllUsers() {
    const endpoint = '/api/users';
    const service = this.urlService + endpoint;
    return this.http.get<User[]>(service);
  }

}
