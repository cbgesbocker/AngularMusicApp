import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { ApiEndpointsService } from "./api-endpoints.service";

@Injectable({ providedIn: "root" })
export class AuthService {
  static loggedIn = false;
  static accessToken = "";

  constructor(
    private router: Router,
    private apiEndpointsService: ApiEndpointsService
  ) {}

  login() {
    const endpoint = this.apiEndpointsService.getBuiltEndpoint(
      ApiEndpointsService.endpointsNamespace.auth
    );
    window.location.replace(endpoint.href);
  }

  logout() {
    AuthService.loggedIn = false;
    AuthService.accessToken = "";
  }
}
