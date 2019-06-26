import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { PaymentsPage } from '../pages/payments/payments';
import { CharitiesPage } from '../pages/charities/charities';
import { ProfileSettingsPage } from '../pages/profile-settings/profile-settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;

  // firstName: string;
  // lastName: string;
  // email: string;
  // username: string;
  // password: string;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
    //menu.enable(true);
    
      statusBar.styleDefault();
      splashScreen.hide();
    
    });
  }

  openPage(page) {
    switch (page) {
      case "ProfilePage":
        this.nav.push(ProfilePage);
        return;
      case "PaymentsPage":
        this.nav.push(PaymentsPage);
        return;
      case "ProfileSettingsPage":
        this.nav.push(ProfileSettingsPage);
        return;
    }
  }
}

