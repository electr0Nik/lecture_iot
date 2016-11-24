import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {  MediaPlugin } from 'ionic-native';



// class
import { Alarm } from '../../classes/alarm.class';
import { AlarmForm } from './form/alarm.form'

// service
import { AlarmOverviewService } from '../../providers/alarm.overview.service';
import { ApiService } from '../../providers/api.service';

// components
import { MainOverviewPage } from '../main-overview/main-overview'

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

  showSuccessMessage: boolean = false;
  form: AlarmForm = new AlarmForm();

  constructor(private navCtrl: NavController, private navParams: NavParams, private service: AlarmOverviewService, private apiService: ApiService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedAlarm = navParams.get('selectedAlarm');
    this.isEditAlarm = this.selectedAlarm !== null;
    if (this.isEditAlarm) {
      this.form = this.getMappedFormFromAlarm(this.selectedAlarm);
    }
  }

  ionViewDidLoad() {
    console.log('Hello AddEditViewPage Page');
    this.showSuccessMessage = false;
  }

  submitFormm(): void {
    let alarm: Alarm = this.getMappedAlarmFromForm(this.form, !this.isEditAlarm);

    if (this.isEditAlarm) {
      this.service.updateAlarm(alarm);
    } else {
      this.service.saveAlarm(alarm);
    }
    this.showSuccessMessage = true;
  }

  goBack(event): void {
    this.navCtrl.push(MainOverviewPage);
  }

  /**
   * trigger lightify and switch bulb on and off
   * trigger lightify only if expected device Uuid is present
   */
  triggerLightify(): void{
    // debug log
    console.log(`${this.selectedAlarm.uuid} : ${this.selectedAlarm.lightIntensity} : ${this.selectedAlarm.lightUpInterval}`);
    this.apiService.triggerLightify(this.selectedAlarm);


    // play sound
    this.audioplay();
  }

  private   audioplay() {
    let pathalone = 'storage/emulated/0/Music/bizarre-guitar-daniel_simon.mp3';

    let file = new MediaPlugin(pathalone, (status) => { });
    file.play();
  }

  /**
   * map from form object to 'entity' object for insert;
   * usuall you want to write an extra mapping service for this kind of operation
   * but since we only prototype, and it's easier to understand what happens, 
   * we keep the mapping here
   */
  private getMappedAlarmFromForm(form: AlarmForm, isNew: boolean): Alarm {
    let count: number = isNew ? this.service.getAlarms().length + 1 : form.id;
    return new Alarm(count, form.name, form.time, form.days, form.maxVolume, form.lightUpInterval, form.lightIntensity, form.maxLightOpacity);
  }

  /**
   * map from 'entity' to form object for insert;
   * usuall you want to write an extra mapping service for this kind of operation
   * but since we only prototype, and it's easier to understand what happens, 
   * we keep the mapping here
   */
  private getMappedFormFromAlarm(alarm: Alarm): AlarmForm {
    return new AlarmForm(alarm.id, alarm.name, alarm.time, alarm.days, alarm.maxVolume, alarm.lightUpInterval, alarm.lightIntensity, alarm.maxLightOpacity);
  }
}
