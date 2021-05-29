import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from 'src/app/models/login-model';
import { UserModel } from 'src/app/models/user-model';
import Swal from 'sweetalert2';
import { ApiLoginService } from '../../services/api-login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userModel: LoginModel;

  constructor(private service: ApiLoginService,
    private router: Router
  ) {
    this.userModel = new LoginModel();
  }

  ngOnInit(): void {
  }

  login(form: NgForm) {

    if (!form.valid) {
      return;
    }
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'momento por favor...'
    });
    Swal.showLoading();

    this.service.getLogin(this.userModel).subscribe(
      (response) => {
        Swal.close();
        console.log(response);
        this.router.navigate(['home']);
      }, (err) => {

        Swal.fire({
          allowOutsideClick: true,
          icon: 'error',
          text: err.error
        });
        console.log(err);
      }
    );

    console.log(this.userModel);
  }

}
