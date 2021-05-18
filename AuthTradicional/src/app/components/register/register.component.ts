import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/models/register-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registModel: RegisterModel;
  constructor(
    private router:Router
  ) {
    this.registModel = new RegisterModel();
   }

  ngOnInit(): void {
  }

  registrar(form: NgForm): void{
    console.log(this.registModel);
    console.log(form);
  }
  
  cancelar(): void{
    this.router.navigate(['login']);
  }
}
