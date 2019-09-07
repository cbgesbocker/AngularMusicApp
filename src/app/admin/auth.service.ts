import { Injectable, OnDestroy } from "@angular/core";
import { ApiEndpointsService } from "../api-endpoints.service";
import { Store } from "@ngrx/store";

import { ActivatedRouteSnapshot, ActivationEnd } from "@angular/router";
import UtilsService from "../utils.service";
import { Observable, Subscription } from "rxjs";

import jsCookie from "js-cookie";
import * as AuthActions from "./store/admin.actions";
import { HttpService } from "../http.service";
import { environment } from "src/environments/environment.prod";

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
      admin: { clientState: string };
    }>,
    private endpointsService: ApiEndpointsService,
    private http: HttpService
  ) {
    this.store.select("admin").subscribe(auth => {
      this.clientState = auth.clientState;
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
  authenticate(accessToken: string, returnedState: string): void {
    let href = "";
    if (returnedState && returnedState === this.clientState) {
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

  async refreshToken(accessToken: string) {
    this.http
      .postApiRequest(this.endpointsService.getRefreshtokenUrl(), {
        headers: {
          ...this.http.getRefreshTokenHeaders()
        },
        grant_type: environment.apiConfig.grant_type,
        refresh_token: accessToken
      })
      .then(data => {});
  }

  login(accessToken: string): void {
    jsCookie.set("accessToken", accessToken, { expires: 1 / 24 });
    this.store.dispatch(new AuthActions.SetAuth(accessToken));
    this.store.dispatch(new AuthActions.SetStateValidity(true));
  }

  logout(): void {
    this.store.dispatch(new AuthActions.SetStateValidity(false));
    this.store.dispatch(new AuthActions.SetAuth(""));
    window.location.href = "/";
  }
}
