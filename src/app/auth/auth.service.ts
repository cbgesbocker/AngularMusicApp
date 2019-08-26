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
export class AuthService implements OnDestroy {
  readonly localStorageCacheKeys = {
    clientState: "clientState"
  };

  private clientState: string = "";
  private subscription: Subscription;

  constructor(
    private store: Store<{
      authState: { clientState: string };
    }>,
    private endpointsService: ApiEndpointsService
  ) {
    this.store.select("authState").subscribe(authState => {
      this.clientState = authState.clientState;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  populateStoreClientState(): void {
    const stateToUse =
      localStorage.getItem(this.localStorageCacheKeys.clientState) ||
      UtilsService.getGeneratedRandomString();

    this.store.dispatch(new AuthActions.SetClientState(stateToUse));
    localStorage.setItem(this.localStorageCacheKeys.clientState, stateToUse);
  }

  /**
   * Redirect user to spotify.accounts/authorize
   * to get valid token if not logged in
   */
  authenticate(route: ActivatedRouteSnapshot): void {
    const error = UtilsService.getFragmentVar({
      route,
      tokenID: "error"
    });
    // if error, bail early
    if (error) {
      return;
    }

    // get state and validate
    const returnedState = UtilsService.getFragmentVar({
      route,
      tokenID: "state"
    });

    let href = "";
    if (returnedState && returnedState === this.clientState) {
      const accessToken = UtilsService.getFragmentVar({
        route,
        tokenID: "access_token"
      });
      // set login state
      this.login(accessToken);
      // do not redirect
      return;
    } else if (returnedState && returnedState !== this.clientState) {
      // if state doesn't match redirect to home
      href = window.location.host;
    } else {
      // redirect to spotify auth url
      href = this.endpointsService.getAuthenticationUrl();
    }

    // If user is not logged in, try to
    UtilsService.redirectTo(href);
  }

  login(accessToken: string): void {
    this.store.dispatch(new AuthActions.SetAuth(accessToken));
    this.store.dispatch(new AuthActions.SetStateValidity(true));
  }

  logout(): void {
    this.store.dispatch(new AuthActions.SetStateValidity(false));
    this.store.dispatch(new AuthActions.SetAuth(""));
  }
}
