import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

// custom 
import { User } from '../classes/user.class'

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  isLoggedIn: boolean;
  requestUrl: string = 'http://localhost:6001/';

  constructor(private http: Http) {
    console.log('Hello AuthService Provider');
    this.isLoggedIn = false;
  }

  /**
   * log in user
   * 
   * return any
   */
  login(user) {
    let headers = new Headers();
    let credentials = "name=" + user.name + "&password=" + user.password;
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise(resolve => {

      this.http.post(this.requestUrl + 'authenticate', credentials, { headers: headers }).subscribe(data => {
        if (data.json().success) {
          window.localStorage.setItem('uuidToken', data.json().token);
          this.isLoggedIn = true;
        }
        resolve(this.isLoggedIn);
      });
    });
  }


  /**
   * simple user registration ... 
   * not using this in prototype
   * 
   * return any
   */
  register(user: User) {

    return new Promise(resolve => {
      var _user = "name=" + user.name +
                  "&password=" + user.password +
                  "&userid=" + user.uuid +
                  "&uuid=" + user.uuid.toString();

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http.post(this.requestUrl + 'adduser', _user, { headers: headers }).subscribe(data => {
        if (data.json().success) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });

  }

  /**
   * simple logout
   * without killing the cookie
   */
  logout():void {
    this.isLoggedIn = false;
    window.localStorage.clear();
  }
}