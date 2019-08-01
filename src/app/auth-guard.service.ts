import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";

import { AuthService } from "./auth.service";
import { HttpService } from "./http.service";
import { ApiEndpointsService } from "./api-endpoints.service";

@Injectable({ providedIn: "root" })
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private http: HttpService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (route.fragment && route.fragment.includes("access_token")) {
      const token = route.fragment.split("=")[1];
      AuthService.accessToken = token;

      if (this.isValidToken()) {
        AuthService.loggedIn = true;
      }
    }

    if (!AuthService.loggedIn) {
      this.authService.login();
    }

    return AuthService.loggedIn;
  }

  async isValidToken() {
    try {
      await this.http
        .getApiRequestSet(ApiEndpointsService.endpointsNamespace.myTracks)
        .toPromise()
        .then(data => {
          return true;
        });
    } catch (e) {
      return false;
    }
  }
}
