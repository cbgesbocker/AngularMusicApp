import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";

import { HttpService } from "./http.service";
import { ApiEndpointsService } from "./api-endpoints.service";
import { AuthService } from "./auth/auth.service";

@Injectable({ providedIn: "root" })
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService) {}

  /**
   * @param route
   * Auth Guard for /admin
   */
  canActivate(route: ActivatedRouteSnapshot): boolean {
    this.authService.authenticate(route);
    return this.authService.isLoggedIn();
  }
}
