import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { ApiEndpointsService } from "./api-endpoints.service";

@Injectable({ providedIn: "root" })
export class AuthService {
  private loggedIn = false;
  private accessToken = "";

  constructor(
    private router: Router,
    private apiEndpointsService: ApiEndpointsService
  ) {}

  /**
   * Redirect user to spotify.accounts/authorize
   * to get valid token
   */
  login(): void {
    const endpoint = this.apiEndpointsService.getAuthenticationEndpoint();
    window.location.replace(endpoint);
  }

  logout(): void {
    this.loggedIn = false;
    this.accessToken = "";
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
