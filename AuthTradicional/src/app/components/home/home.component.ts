import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiLoginService } from 'src/app/services/api-login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public token: string | null;

  constructor(
    private service: ApiLoginService,
    private router: Router
  ) {

    this.token = localStorage.getItem('token');

  }

  ngOnInit(): void {


  }

  logout(): void {
    this.service.destroyToken();
    this.router.navigate(['login']);
  }

  pruebas(): void {
    if (!this.service.getPayloadFromTokem()) {
      this.router.navigate(['login']);
    }
  }
}
