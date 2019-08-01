import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";

import { AuthService } from "./auth.service";
import { HttpService } from "./http.service";
import { ApiEndpointsService } from "./api-endpoints.service";

@Injectable({ providedIn: "root" })
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthService,
    private http: HttpService,
    private apiEndpointService: ApiEndpointsService
  ) {}

  /**
   * @param route
   * Auth Guard for /admin
   */
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // check for access token in url
    if (route.fragment && route.fragment.includes("access_token")) {
      const token = route.fragment.split("=")[1];
      this.authService.setAccessToken(token);

      // Check if token is valid before setting user to logged in
      if (this.isValidToken()) {
        this.authService.setLoggedIn(true);
      }
    }
    // If user is not logged in, try to
    if (!this.authService.isLoggedIn()) {
      this.authService.login();
    }
    // return if they are logged in
    return this.authService.isLoggedIn();
  }

  /**
   * Check if a valid response is returned from the API
   * to validate the token
   */
  async isValidToken(): Promise<boolean> {
    try {
      await this.http
        .getApiRequestSet(this.apiEndpointService.getMyTracksEndpoint())
        .toPromise()
        .then(data => {
          return true;
        });
    } catch (e) {
      return false;
    }
  }
}
