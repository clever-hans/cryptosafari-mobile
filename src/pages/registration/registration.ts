import { Component } from '@angular/core';
import { NavController, NavControllerBase, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { CharitiesPage } from '../charities/charities';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  public first_name: string;
  public last_name: string;
  public email: string;
  public password: string;
  public confirm_password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public alertCtrl: AlertController) {}

  register() {
    // check to ensure that all required fields are provided
    if (!this.first_name || !this.last_name || !this.email || !this. password || !this.confirm_password) {
      let alert = this.alertCtrl.create({
        title: 'Please enter all required fields.',
        subTitle: 'Oops! Looks like something is missing',
        buttons: ['Try again']
      });
      alert.present();
      return;
    }

    if (this.password != this.confirm_password) {
      let alert = this.alertCtrl.create({
        title: 'Please Check Passwords',
        subTitle: 'Ensure that "password" and "Confirm Password" match.',
        buttons: ['Try again']
      });
      alert.present();
      return;
    }

    // make call to server and check validity of login credentials 
    this.http
      .post("http://localhost:3000/register", {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password

      }).subscribe(
        result => {
          // if successful, proceed to profile page and push data
          console.log('successful login');
          this.navCtrl.push(ProfilePage, {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password
          });
        },
        error => {
          if (error.json().message == "email address already registered with another user") {
            let alert = this.alertCtrl.create({
              title: 'User Alreay Exists',
              subTitle: 'Oops! That email address is already registered with another user.',
              buttons: ['Try again']
            });
            alert.present();
            console.log(error);
          }

          if (error.json().message == 'email address invalid') {
            let alert = this.alertCtrl.create({
              title: 'Invalid Email Address',
              subTitle: 'Please enter a valid email address.',
              buttons: ['Try again']
            });
            alert.present();
            console.log(error);
          }
        }
      );
  }

  navigateToProfile() {
    this.navCtrl.push(ProfilePage, {
      firstName: this.first_name,
      lastName:  this.last_name,
      email:  this.email,
      password:  this.password,
    })

  }

  navigateToCharities() {
    this.navCtrl.push(CharitiesPage);

  }

  navigateToHome() {
    this.navCtrl.push(HomePage);

  }
}
   