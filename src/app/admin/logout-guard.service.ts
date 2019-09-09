import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import UtilsService from "../utils.service";

@Injectable({ providedIn: "root" })
export class LogoutGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (confirm("Are you sure you want to logout?")) {
      this.authService.logout();
      this.router.navigate(["/"]);
      return true;
    }
    return false;
  }
}
