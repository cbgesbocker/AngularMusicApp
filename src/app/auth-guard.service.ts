import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "./auth/auth.service";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthGuardService implements CanActivate {
  private isLoggedIn: boolean;

  constructor(
    private authService: AuthService,
    private store: Store<{ isLoggedIn: boolean }>
  ) {
    this.store.select("authState").subscribe(data => {
      this.isLoggedIn = data.isLoggedIn;
    });
  }

  /**
   * @param route
   * Auth Guard for /admin
   */
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // if already logged in, return true
    if (this.isLoggedIn) {
      return true;
    }

    // force redirect
    this.authService.authenticate(route);

    // return logged in state
    return this.isLoggedIn;
  }
}
