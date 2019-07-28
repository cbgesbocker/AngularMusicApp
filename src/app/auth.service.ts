import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
@Injectable({ providedIn: "root" })
export class AuthService {
  static loggedIn = false;
  public static accessToken = "";

  constructor(private router: Router) {}

  login() {
    const apiAccountsUrl = new URL(
      environment.apiConfig.apiAccountsUrl +
        environment.apiConfig.endpoints.auth
    );

    apiAccountsUrl.searchParams.set(
      "scope",
      encodeURIComponent(environment.apiConfig.scope)
    );
    apiAccountsUrl.searchParams.set("response_type", "token");
    apiAccountsUrl.searchParams.set(
      "client_id",
      environment.apiConfig.client_id
    );
    apiAccountsUrl.searchParams.set("redirect_uri", environment.redirect_uri);

    window.location.replace(apiAccountsUrl.href);
  }

  logout() {
    this.loggedIn = false;
    this.accessToken = "";
  }
}
