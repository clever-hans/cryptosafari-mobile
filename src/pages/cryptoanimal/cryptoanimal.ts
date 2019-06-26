import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharitiesPage } from '../charities/charities';
import { Charity } from '../../models/charity';
import { PaymentsPage } from '../payments/payments';
import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { Cryptoanimal } from '../../models/cryptoanimal';



@IonicPage()
@Component({
  selector: 'page-cryptoanimal',
  templateUrl: 'cryptoanimal.html',
})
export class CryptoanimalPage {

  // public charity: Charity;
  public user: User = new User();
  public cryptoanimal: Cryptoanimal;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.cryptoanimal = this.navParams.get("cryptoanimal");
    console.log(this.cryptoanimal);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CryptoanimalPage');
  }

  navigateToCharities() {
    this.navCtrl.push(CharitiesPage, {
      user: this.user
  });

  }

  navigateToPayments(charity: Charity) {
    this.navCtrl.push(PaymentsPage, {
        charity: charity,
        user: this.user

    });
  }

  navigateToHome() {
    this.navCtrl.push(HomePage, {
      user: this.user

  });

  }

}