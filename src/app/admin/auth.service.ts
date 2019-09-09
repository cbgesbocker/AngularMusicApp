import { Injectable, OnDestroy } from "@angular/core";
import { ApiEndpointsService } from "../api-endpoints.service";
import { Store } from "@ngrx/store";

import UtilsService from "../utils.service";
import { Subscription } from "rxjs";

import jsCookie from "js-cookie";
import * as AuthActions from "./store/admin.actions";
import { HttpService } from "../http.service";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: "root"
})
export class AuthService implements OnDestroy {
  readonly cookieKeys = {
    clientState: "clientState",
    accessToken: "accessToken"
  };

  private clientState: string = jsCookie.get(this.cookieKeys.clientState) || "";
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

  isUserLoggedIn(): boolean {
    const state = jsCookie.get(this.cookieKeys.clientState);
    const accessToken = jsCookie.get(this.cookieKeys.accessToken);
    return accessToken && state;
  }

  populateStoreClientState(): void {
    const stateToUse =
      localStorage.getItem(this.cookieKeys.clientState) ||
      UtilsService.getGeneratedRandomString();
    this.store.dispatch(new AuthActions.SetClientState(stateToUse));
    localStorage.setItem(this.cookieKeys.clientState, stateToUse);
  }

  /**
   * Redirect user to spotify.accounts/authorize
   * to get valid token if not logged in
   */
  authenticate(accessToken: string, returnedState: string): void {
    let href = "";
    if (returnedState && returnedState === this.clientState) {
      // set login state
      this.setAuthCookies([
        {
          key: this.cookieKeys.accessToken,
          value: accessToken
        },
        {
          key: this.cookieKeys.clientState,
          value: this.clientState
        }
      ]);

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

  login(accessToken: string = jsCookie.get(this.cookieKeys.accessToken)): void {
    jsCookie.set(this.cookieKeys.accessToken, accessToken, { expires: 1 / 24 });

    this.store.dispatch(new AuthActions.SetAuth(accessToken));
    this.store.dispatch(new AuthActions.SetStateValidity(true));
  }

  logout(): void {
    jsCookie.set(this.cookieKeys.accessToken, "");
    jsCookie.set(this.cookieKeys.clientState, "");

    this.store.dispatch(new AuthActions.SetStateValidity(false));
    this.store.dispatch(new AuthActions.SetAuth(""));
  }

  setAuthCookies(cookies: { key: string; value: string }[]) {
    for (var i in cookies) {
      const config = cookies[i];
      jsCookie.set(config.key, config.value);
    }
  }
}
