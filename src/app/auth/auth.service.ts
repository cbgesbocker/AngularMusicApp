import { Injectable } from "@angular/core";
import { ApiEndpointsService } from "../api-endpoints.service";
import { Store } from "@ngrx/store";

import { ActivatedRouteSnapshot, ActivationEnd } from "@angular/router";
import UtilsService from "../utils.service";
import { Observable } from "rxjs";

import * as AuthActions from "./store/auth.actions";

@Injectable({
  providedIn: "root"
})
export class AuthService extends ApiEndpointsService {
  private isLoggedIn: boolean = false;
  private clientState: string = "";

  constructor(
    private store: Store<{
      isLoggedIn: boolean;
      clientState: string;
    }>
  ) {
    // inherit all methods from ApiEndpointsService
    super();

    this.store.select("authState").subscribe(data => {
      this.isLoggedIn = data.isLoggedIn;
      this.clientState = data.clientState;
      const isValidState = this.clientState === data.clientState;
      this.store.dispatch(new AuthActions.SetStateValidity(isValidState));
    });

    debugger;
    // Set client state variable for request origin verification
    this.store.dispatch(
      new AuthActions.SetClientState(UtilsService.getGeneratedRandomString())
    );
  }

  /**
   * Redirect user to spotify.accounts/authorize
   * to get valid token if not logged in
   */
  authenticate(route: ActivatedRouteSnapshot): void {
    // if authenticated, bail early
    if (this.isLoggedIn) {
      return;
    }

    // if error, bail early
    if (
      UtilsService.getFragmentVar({
        route,
        tokenID: "error"
      })
    ) {
      return;
    }

    // get state and validate
    const returnedState = UtilsService.getFragmentVar({
      route,
      tokenID: "state"
    });

    const accessToken = UtilsService.getFragmentVar({
      route,
      tokenID: "access_token"
    });

    this.store.dispatch(new AuthActions.SetAuth(accessToken));

    // If user is not logged in, try to
    this.login();
  }

  login(): void {
    const endpoint = this.getAuthenticationUrl();
    window.location.replace(endpoint);
  }

  logout(): void {}
}
