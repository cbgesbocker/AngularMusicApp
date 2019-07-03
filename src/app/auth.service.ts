import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  constructor(private router: Router){}

  login() {
    const apiUrl = new URL(environment.apiUrl);
    apiUrl.searchParams.set('scopes', environment.scopes)
    apiUrl.searchParams.set('scopes', environment.scopes)
    apiUrl.searchParams.set('scopes', environment.scopes)

    this.router.navigate([''])
  }
}
