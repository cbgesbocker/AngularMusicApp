import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: "root" })
export class LogoutGuardService implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate(): boolean {
    if (confirm("Are you sure you want to logout?")) {
      return true;
    }
    return false;
  }
}
