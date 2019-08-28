import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "./auth/auth.service";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as AuthActions from "./auth/store/auth.actions";
import UtilsService from "./utils.service";

@Injectable({ providedIn: "root" })
export class AuthGuardService implements CanActivate {
  private isLoggedIn: boolean;

  constructor(
    private authService: AuthService,
    private store: Store<{ auth: { isValidState: boolean } }>
  ) {
    this.store.select("auth").subscribe(auth => {
      this.isLoggedIn = auth.isValidState;
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

    // populate client state
    this.authService.populateStoreClientState();

    const error = UtilsService.getFragmentVar({
      route,
      tokenID: "error"
    });
    if (error) {
      return false;
    }

    const accessToken = UtilsService.getFragmentVar({
      route,
      tokenID: "access_token"
    });

    const returnedState = UtilsService.getFragmentVar({
      route,
      tokenID: "state"
    });

    // if state is valid, and access token is provided,
    // this function will log the user in and trigger
    // auth store observables to update
    this.authService.authenticate(accessToken, returnedState);

    debugger;
    // return logged in state
    return this.isLoggedIn;
  }
}
