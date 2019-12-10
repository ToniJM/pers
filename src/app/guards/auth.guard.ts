import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router) {}

  canActivate(): boolean | UrlTree {
    if (this.auth.authenticated()) {
      return true;
    } else {
      return this.router.createUrlTree(['/login']);
    }
  }
}
