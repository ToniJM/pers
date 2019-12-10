import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';

import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey: string;

  private userToken: string;

  constructor(private http: HttpClient) {
    this.apiKey = environment.firabase.apiKey;
    this.readToken();
  }

  logout() {
    localStorage.removeItem('token');
  }

  login(user: UserModel) {
    const authData = {
      ...user,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}signInWithPassword?key=${this.apiKey}`,
      authData
    ).pipe(
      map(res => {
        this.saveToken(res['idToken'], res['expiresIn']);
        return res;
      })
    );
  }

  newUser(user: UserModel) {
    const authData = {
      ...user,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}signUp?key=${this.apiKey}`,
      authData
    ).pipe(
      map(res => {
        this.saveToken(res['idToken']);
        return res;
      })
    );
  }

  private saveToken(idToken: string, expiresIn: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    const today = new Date();
    today.setSeconds(+expiresIn);
    localStorage.setItem('expires', today.getTime().toString());

  }

  private readToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  authenticated(): boolean {
    if (this.userToken.length < 2 || !localStorage.getItem('expires')) {
      return false;
    }

    const expires = +localStorage.getItem('expires');
    const now = new Date();

    return expires > now.getTime();
  }
}
