import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';
import { ProfilePage } from '../profile/profile';
import { CharitiesPage } from '../charities/charities';
import { PortfolioPage } from '../portfolio/portfolio';
import { PaymentsPage } from '../payments/payments';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public email: string;
  public password: string;

  constructor(public navCtrl: NavController, private app: App) {
    this.email = "";

       if (localStorage.getItem("TOKEN")) {
       this.app.getRootNav().setRoot(ProfilePage);
        }
}
  
  navigateToLogin() {
    this.navCtrl.push(LoginPage);

    this.app.getRootNav().setRoot(LoginPage);

    

  }


  navigateToRegistration() {
    this.navCtrl.push(RegistrationPage);

  }

  navigateToProfile() {
    this.navCtrl.push(ProfilePage);

  }

  navigateToCharities() {
    this.navCtrl.push(CharitiesPage);

  }

  showData() {
    alert(this.email);
  
  this.navCtrl.push(LoginPage, {
    email: this.email,
    password: this.password
  })

}
}
