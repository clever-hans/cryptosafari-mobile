import { Component, ApplicationRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { Http } from '@angular/http';

/**
 * Generated class for the ProfileSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-settings',
  templateUrl: 'profile-settings.html',
})


export class ProfileSettingsPage {

  user_info: Array<User> = [];
  public user: User = new User();
  public first_name: string = "";
  public last_name: string = "";
  public email: string = "";
  public password: string = "Enter new password";

  constructor(public navCtrl: NavController, public navParams: NavParams, private appRef: ApplicationRef,
    public http: Http) {
  }

  profile_info() {  this.http
    .get("http://localhost:3000/users/" + this.user.user_id) 
    .subscribe (
      Result => {
      console.log(Result);
      this.user_info = Result.json() as Array<User>;
        //this.first_name = this.user_info.first_name;
      },
      Error => {
      console.log(Error);
      }
      );  
  
  }
  

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileSettingsPage');
    this.profile_info();
  }

}
