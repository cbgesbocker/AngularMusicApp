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

    if (returnedState && returnedState === this.clientState) {
      const accessToken = UtilsService.getFragmentVar({
        route,
        tokenID: "access_token"
      });
      this.login(accessToken);
      return;
    }

    // If user is not logged in, try to
    this.redirectToSpotifyLogin();
  }

  redirectToSpotifyLogin(): void {
    const endpoint = this.endpointsService.getAuthenticationUrl();
    window.location.replace(endpoint);
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
