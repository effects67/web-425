import { Component } from '@angular/core';
import {User} from "./user";
import {Observable} from "rxjs";
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  template: `
    <br /><br />
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Fruit List</h2>
          <ul>
            <li *ngFor="let user of users | async">
            {{ user.ID }} {{ user.name }} {{ user.pricePerPound }} {{ user.quantity }}
            </li>
          </ul>
        </div>
      </div>  
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: Observable<User[]>;
  title = 'app';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
