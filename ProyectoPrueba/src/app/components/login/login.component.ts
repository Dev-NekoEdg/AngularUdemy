import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() user: string;
  @Input() password: string;
  loginIncorrect: boolean = true;

  constructor(private service: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.user);
    console.log(this.password);
    this.service.getAllUsers().subscribe(users => {

      let index = users.findIndex(u => u.name === this.user && u.phoneNumber === this.password);

      console.log(index);
      if (index >= 0) {
        this.router.navigate(['/usuarios']);
      }
      else {
        this.loginIncorrect = false;
        console.log(this.loginIncorrect);
      }
    });
  }
}
