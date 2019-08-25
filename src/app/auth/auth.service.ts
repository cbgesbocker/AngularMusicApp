import { Injectable, OnDestroy } from "@angular/core";
import { ApiEndpointsService } from "../api-endpoints.service";
import { Store } from "@ngrx/store";

import { ActivatedRouteSnapshot, ActivationEnd } from "@angular/router";
import UtilsService from "../utils.service";
import { Observable, Subscription } from "rxjs";

import * as AuthActions from "./store/auth.actions";

@Injectable({
  providedIn: "root"
})
export class AuthService extends ApiEndpointsService implements OnDestroy {
  public static readonly CLIENT_STATE_KEY = "clientState";

  private clientState: string = "";
  private subscription: Subscription;

  constructor(
    private store: Store<{
      authState: { clientState: string };
    }>
  ) {
    // inherit all methods from ApiEndpointsService
    super();

    this.subscription = this.store.select("authState").subscribe(authState => {
      this.clientState = authState.clientState;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Redirect user to spotify.accounts/authorize
   * to get valid token if not logged in
   */
  authenticate(route: ActivatedRouteSnapshot): void {
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
    debugger;

    if (returnedState === this.clientState) {
      this.store.dispatch(
        new AuthActions.SetAuth(
          UtilsService.getFragmentVar({
            route,
            tokenID: "access_token"
          })
        )
      );

      this.store.dispatch(new AuthActions.SetStateValidity(true));
      return;
    }

    // If user is not logged in, try to
    this.login();
  }

  login(): void {
    const endpoint = this.getAuthenticationUrl([
      {
        key: "state",
        value: this.clientState
      }
    ]);
    window.location.replace(endpoint);
  }

  logout(): void {}
}
