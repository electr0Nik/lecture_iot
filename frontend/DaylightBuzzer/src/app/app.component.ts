import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from 'ionic-native';

// custom pages
import { MainOverviewPage } from '../pages/main-overview/main-overview';
import { AddEditViewPage } from '../pages/add-edit-view/add-edit-view';
import { AdminOverviewPage } from '../pages/admin-overview/admin-overview';
import { RegisterViewPage } from '../pages/register-view/register-view';


@Component({
  templateUrl: 'app.component.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = MainOverviewPage;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public menu: MenuController) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Main', component: MainOverviewPage },
      { title: 'Add_Edit', component: AddEditViewPage },
      { title: 'Admin', component: AdminOverviewPage },
      { title: 'Register', component: RegisterViewPage }

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
