import { Injectable } from "@angular/core";
import { ApiEndpointsService } from "../api-endpoints.service";
import { HttpService } from "../http.service";
import { ActivatedRouteSnapshot, ActivationEnd } from "@angular/router";
import UtilsService from "../utils.service";

@Injectable({
  providedIn: "root"
})
export class AuthService extends ApiEndpointsService {
  constructor(
    private http: HttpService,
    private loggedIn = false,
    private accessToken = ""
  ) {
    super();
  }

  /**
   * Redirect user to spotify.accounts/authorize
   * to get valid token
   */
  authenticate(route: ActivatedRouteSnapshot): void {
    const accessToken = UtilsService.getAccessTokenFromRouteFragment(
      route,
      "access_token"
    );

    // If user is not logged in, try to
    if (!this.isLoggedIn()) {
      this.login();
    }
  }

  login(): void {
    const endpoint = this.getAuthenticationEndpoint();
    window.location.replace(endpoint);
  }

  logout(): void {
    this.loggedIn = false;
    this.accessToken = "";
  }

  getAccessToken(): string {
    return this.accessToken;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setAccessToken(token: string): void {
    this.accessToken = token;
  }

  setLoggedIn(state: boolean): void {
    this.loggedIn = state;
  }
}
