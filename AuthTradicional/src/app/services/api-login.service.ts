import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAuth } from '../models/user-auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginModel } from '../models/login-model';
import jwt_decode from "jwt-decode";
import { PayloadModel } from '../models/payload-model';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  private urlLogin: string = 'http://localhost:9001/UserService/api/user/security/token';
  public userToken: string | null = null;

  constructor(
    private http: HttpClient
  ) {
    this.readToken();
  }

  getLogin(user: LoginModel): Observable<UserAuth> {
    return this.http.post<UserAuth>(this.urlLogin, user).
      pipe(
        map((resp) => {
          this.saveToken(resp.token);
          return resp;
        })
      );
  }


  private saveToken(token: string | null) {
    this.userToken = token;
    // Non-null assertion operator: le indica a TS que, a pesar de que la variable puede ser nula. esta variable hasta ese punto no será nula.
    localStorage.setItem('token', token!)
  }

  readToken(): void {
    this.userToken = localStorage.getItem('token') ?? '';
  }

  validateToken(): boolean {
    const token: string | null = localStorage.getItem('token');
    let validation: boolean = false;
    if (token) {
      validation = true;
    }
    else {
      validation = false;
    }
    console.log(validation);
    return validation;
  }

  destroyToken(): void {
    localStorage.removeItem('token');
  }

  getPayloadFromTokem(): boolean {
    let token: string = localStorage.getItem('token') ?? '';

    if (!token) {
      return false;
    }

    const decoded: PayloadModel = jwt_decode(token);
    console.log(decoded);

    const today: Date = new Date();
    const expirationDate: Date = new Date(decoded.exp! * 1000);

    if (today > expirationDate) {
      localStorage.removeItem('token');
      return false;
    }

    return true;
  }

}
