import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/models/register-model';
import { RequestClaimModel } from 'src/app/models/request-claim-model';
import { RequestUserModel } from 'src/app/models/request-user-model';
import { ApiRegisterService } from 'src/app/services/api-register.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registModel: RegisterModel;
  constructor(
    private router: Router,
    private service: ApiRegisterService
  ) {
    this.registModel = new RegisterModel();
  }

  ngOnInit(): void {
  }

  registrar(form: NgForm): void {

    if (this.registModel.password !== this.registModel.confirmPass) {
      Swal.fire({
        allowOutsideClick: false,
        icon: 'warning',
        text: 'La confirmación del password es invalida.'
      });
      return;
    }

    let customClaims: RequestClaimModel[] = [];
    customClaims.push(this.generateClaim('email', this.registModel.email!));

    let request: RequestUserModel = new RequestUserModel();
    request.name = this.registModel.name;
    request.lastName = this.registModel.lastName;
    request.userName = this.registModel.userName;
    request.password = this.registModel.password;
    request.roleId = '62607fe8-440e-4efb-9f7b-c5d51a3e2028';
    request.active = true;
    request.claims = customClaims

    this.service.registerUser(request).subscribe(
      (response) => {
        console.log(response)
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

  }

  private generateClaim(property: string, value: string): RequestClaimModel {
    const claim: RequestClaimModel = {
      property: property,
      propertyValue: value
    }

    return claim;
  }

  cancelar(): void {
    this.router.navigate(['login']);
  }
}
