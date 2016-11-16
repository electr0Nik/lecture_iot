import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../classes/user.class';

/*
  Generated class for the AdminOverview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-admin-overview',
  templateUrl: 'admin-overview.html'
})
export class AdminOverviewPage {

  constructor(public navCtrl: NavController) {
    this.authenticate();
  }

  user: User;
  isAuthenticated: boolean;

  authenticate(): void {
    // todo .. autenticate user
    this.isAuthenticated = this.user !== null;
  }

  ionViewDidLoad() {
    console.log('Hello AdminOverviewPage Page');
  }

  goBack() {
    this.navCtrl.pop();
  }

}
