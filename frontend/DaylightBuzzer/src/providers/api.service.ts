import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



import { Alarm } from '../classes/alarm.class';

/*
  Generated class for the ApiService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ApiService {
  requestUrl: string = 'http://localhost:6001/';

  constructor(public http: Http) {
    console.log('Hello ApiService Provider');
  }

  /**
   * log in user
   * 
   * return any
   */
  triggerLightify(alarm: Alarm) {
    let headers = new Headers();

    let lightifyParams = "lightIntensity=" + alarm.lightIntensity + 
    "&lightUpInterval=" + alarm.lightUpInterval + 
    'maxLightOpacity=' + alarm.maxLightOpacity + 
    'uuid' + alarm.uuid.toString;
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise(resolve => {

      this.http.post(this.requestUrl + 'triggerLightify', lightifyParams, { headers: headers }).subscribe(data => {
        if (data.json().success) {
          window.localStorage.setItem('uuidToken', data.json().token);
        }
        resolve(true);
      });
    });
  }

}
