import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


// custom pages
import { AddEditViewPage } from '../add-edit-view/add-edit-view';
import { AdminOverviewPage } from '../admin-overview/admin-overview';

// custom classes
import { Alarm } from '../../classes/alarm.class';

// custom service 
import { AlarmOverviewService } from "../../providers/alarm.overview.service";
import { AuthService } from "../../providers/auth.service";

/*
  Generated class for the MainOverview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-main-overview',
  templateUrl: 'main-overview.html'
})
export class MainOverviewPage {
  alarms: Array<Alarm>;
  nativePath: string = 'Music/bizarre-guitar-daniel_simon.mp3';
  file;
  isLoggedIn: boolean = false;

  constructor(private navCtrl: NavController, private alarmOverviewService: AlarmOverviewService, private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn;
  }


  ionViewDidLoad() {
    console.log('Hello MainOverviewPage Page');
    this.getAlarmOverviewList();
  }

  /**
   * get all alarms 
   */
  getAlarmOverviewList(): void {
    this.alarms = this.alarmOverviewService.getAlarms();
  }

  /**
   * delete whole alarm
   */
  deleteAlarm(alarm: Alarm): void {
    this.alarmOverviewService.deleteAlarm(alarm);
    this.alarms = this.alarms.filter(a => a !== alarm);
  }


  /**
   * alternate alarm state
   */
  updateAlarmState(alarm: Alarm): void {
    alarm.active = !alarm.active
    this.alarmOverviewService.updateAlarm(alarm);
  }

  // simple logout call
  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }

  // navigation
  /**
   * alarm is an optional parameter.. if not present, transmit null
   */
  navigateToAddCreateView(event, alarm?: Alarm): void {
    this.navCtrl.push(AddEditViewPage, {
      selectedAlarm: alarm || null
    });
  }

  navigateToAdminView(event): void {
    this.navCtrl.push(AdminOverviewPage);
  }

}
