import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "./auth/auth.service";
import { Store } from "@ngrx/store";

@Injectable({ providedIn: "root" })
export class AuthGuardService implements CanActivate {
  private isLoggedIn;

  constructor(
    private authService: AuthService,
    private store: Store<{ isLoggedIn: boolean }>
  ) {
    this.store.select("");
  }

  /**
   * @param route
   * Auth Guard for /admin
   */
  canActivate(route: ActivatedRouteSnapshot): boolean {
    this.authService.authenticate(route);
    return this.authService.isLoggedIn();
  }
}
