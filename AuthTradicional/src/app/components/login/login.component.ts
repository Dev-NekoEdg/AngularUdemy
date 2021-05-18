import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userModel: UserModel;
 
  constructor() { 
    this.userModel = new UserModel();
  }

  ngOnInit(): void {
  }

  login(form: NgForm){

    console.log(form);
    if(!form.valid){
      console.log('NOOOOOO!!!');
    }

    console.log(this.userModel);
  }

}
