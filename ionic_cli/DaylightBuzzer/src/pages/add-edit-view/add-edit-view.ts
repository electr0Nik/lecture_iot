import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


// custom class
import { Alarm } from '../../classes/alarm.class';

/*
  Generated class for the AddEditView page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-edit-view',
  templateUrl: 'add-edit-view.html'
})
export class AddEditViewPage {

  selectedAlarm: Alarm;
  isEditAlarm: boolean;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedAlarm = navParams.get('selectedAlarm');
    this.isEditAlarm = this.selectedAlarm !== null;
  }

  ionViewDidLoad() {
    console.log('Hello AddEditViewPage Page');
  }

  goBack() {
    this.navCtrl.pop();
  }
}
