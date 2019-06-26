import { ProfilePage } from "./pages/profile/profile";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";


@Injectable()
export class AuthService {
  static login(arg0: any, arg1: any, arg2: any): any {
    throw new Error("Method not implemented.");
  }

    constructor(
        public http: Http

    ) {}

    login(email: string, password: string, callback: Function) {
        this.http
        .post("http://localhost:3000/login", {
          email: email,
          password: password
        }) 
        .subscribe (
          Result => {
              var responseJson = Result.json();
            //store the token in local storage
            localStorage.setItem("TOKEN", responseJson.token) //-- token no longer passed via navParams, so need to get it from local storage
             //console.log(Result);
             
             
             //this.navCtrl.push(ProfilePage)
            callback();

          },
          error => {
            callback(error);
              //console.log(Error);
          }
          );

          // var responseJson = result.json();
          // console.log("jwt: ", responseJson.token);
          
          
      }

    }
