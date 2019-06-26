import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import { AuthService } from '../../auth.service';
import { callbackify } from 'util';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public email: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public alertCtrl: AlertController) { }


  login() {
    // ensure all credentials are provied
    if (!this.email || !this.password) {
      let alert = this.alertCtrl.create({
        title: 'Please enter all required fields.',
        subTitle: 'Oops! Looks like something is missing',
        buttons: ['Try again']
      });
      alert.present();
      return;
    }

    // make call to server and check validity of login credentials 
    this.http
      .post("http://localhost:3000/login", {
        email: this.email,
        password: this.password
      }).subscribe(
        result => {
          // if successful, proceed to profile page and push data
          console.log('successful login');
          this.navCtrl.push(ProfilePage, {
            email: this.email,
            password: this.password
          }
        )
        },
        error => {
          console.log("invalid credentials");
          let alert = this.alertCtrl.create({
            title: 'Invalid credentials',
            subTitle: 'Incorrect email address or password',
            buttons: ['Try again']
          });
          alert.present();
          console.log(error);
          
        }
      );

  }


  navigateToProfile() {
    this.navCtrl.push(ProfilePage, {
      email: this.email,
      password: this.password
    })
  }

  navigateToHome() {
    this.navCtrl.push(HomePage);

  }





}

