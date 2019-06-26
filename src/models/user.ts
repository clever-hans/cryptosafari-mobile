import { MyCharity } from "./myCharity";
import { Donation } from "./donation";


export class User {
user_id: number = 0;
first_name: string = "";
last_name: string = "";
username: string = "";
email: string = "";
password: string = "";
profile_pic: string = "";
confirm_password: string = "";
//address_id: string = "";
myCharities: Array<MyCharity> = [];
  static myCharities: any;

}