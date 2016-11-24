import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from 'ionic-native';


import { User } from '../../classes/user.class';

// component
import { MainOverviewPage } from '../main-overview/main-overview'
import { RegisterViewPage } from '../register-view/register-view'

// service
import { AuthService } from "../../providers/auth.service";



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
  user: User;
  isAuthenticated: boolean = false;

  device = new Device();

  constructor(public navCtrl: NavController, private authService: AuthService) {
    this.user = new User();
    this.isAuthenticated = this.authService.isLoggedIn;
  }

  /**
   * init when page is loaded
   */
  ionViewDidLoad() {
    console.log('Hello AdminOverviewPage Page');
    // todo .. autenticate user
    // this.isAuthenticated = this.user !== null;
  }


  /**
   * login user with username and password
   * return data from promise
   * if data success; then authenticate
   */
  login(credentials: User) {
    this.authService.login(credentials).then(data => {
      if (data) {
        this.isAuthenticated = true;
      }
    });
  }

  /**
   * add device specific uuid to backend, to restrict calls to _our_ lightify bulb
   */
  addDevice(): void {
//    this.backendService.addDevice(Device.device.uuid);
  }


  // routing 

  //navigateToLogin(): void{
  //  this.navCtrl.push(MainOverviewPage);
  //}

  navigateToRegister(): void {
    this.navCtrl.push(RegisterViewPage);
  }

  goBack(event): void {
    this.navCtrl.push(MainOverviewPage);
  }

}
