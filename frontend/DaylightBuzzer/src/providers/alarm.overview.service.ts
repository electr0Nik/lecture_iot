import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


//custom classes
import { Alarm } from '../classes/alarm.class';

/*
  Generated class for the AlarmOverviewService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AlarmOverviewService {

  constructor(public http: Http) {
    console.log('Hello AlarmOverviewService Provider');
  }


  // create
  saveAlarm(alarm: Alarm): void {
    // todo
  }

  // read
  getAlarms(): Array<Alarm> {
    // todo 
    return
  }

  // update
  updateAlarm(alarm: Alarm): void {
    // todo
  }

  // delete
  deleteAlarm(alarm: Alarm): void {
    // todo
    return;
  }

}
