import { CanActivate, Router} from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    let loggedIn = Math.random() < 0.5;

    if (!loggedIn) {
      alert("You must log in to continue");
      this.router.navigate(["/login"]);
    }

    return loggedIn;
  }
}
