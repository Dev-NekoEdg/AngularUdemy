import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private services: UserService) { }

  ngOnInit(): void {
    this.services.getAllUsers().subscribe(u => {
      this.users = u;
    });
  }

}
