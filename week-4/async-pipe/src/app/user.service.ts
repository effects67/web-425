import { Injectable } from '@angular/core';
import {User} from "./user";
import {Observable} from "rxjs";
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {

  users: User[] = [
    {id: 1, name: "Orange", pricePerPound: "$1.00", quantity: "5"},
    {id: 2, name: "Grapes", pricePerPound: "$0.50", quantity: "12"},
    {id: 3, name: "Banana", pricePerPound: "$0.70", quantity: "3"},
    {id: 4, name: "Strawberry", pricePerPound: "$1.50", quantity: "7"},
    {id: 5, name: "Lemon", pricePerPound: "$1.00", quantity: "4"}
  ];

  constructor() { }

  getUsers(): Observable<User[]> {
    return Observable.of(this.users);
  }
}
