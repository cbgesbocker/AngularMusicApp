import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { Store } from "@ngrx/store";
import UtilsService from "../utils.service";
import jsCookie from "js-cookie";

@Injectable({ providedIn: "root" })
export class AuthGuardService implements CanActivate {
  private isLoggedIn: boolean;

  constructor(
    private authService: AuthService,
    private store: Store<{ admin: { isValidState: boolean } }>
  ) {
    this.store.select("admin").subscribe(auth => {
      this.isLoggedIn = auth.isValidState;
    });
  }

  /**
   * @param route
   * Auth Guard for /admin
   */
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // if already logged in, return true
    if (this.authService.isUserLoggedIn()) {
      this.authService.login();

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

    // return logged in state
    return this.isLoggedIn;
  }
}
