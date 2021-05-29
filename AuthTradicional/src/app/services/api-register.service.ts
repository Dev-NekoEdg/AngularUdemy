import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomClaimModel } from '../models/custom-claim-model';
import { RequestUserModel } from '../models/request-user-model';
import { UserModel } from '../models/user-model';

// Constante para agregar los encabezados para métodos POST y PUT.
// Sin esto a veces molestan las peticiones.
const httpOptions = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiRegisterService {
  
  private url: string = 'http://localhost:9001/UserService/api/user/security/register';

  constructor(private http: HttpClient) { }


  registerUser(user: RequestUserModel): Observable<UserModel> {

    console.log(user);
    return this.http.post<UserModel>(this.url, user,httpOptions);
  }


  
}
