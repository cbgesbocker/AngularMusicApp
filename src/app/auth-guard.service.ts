import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (route.fragment && route.fragment.includes('access_token')) {
      const token = route.fragment.split('=')[1];
      this.authService.accessToken = token;
      this.authService.loggedIn = true;
    }

    const isUserLoggedIn = this.authService.loggedIn;
    if (!isUserLoggedIn) {
      this.authService.login();
    }
    return isUserLoggedIn;
  }
}
