import { Component, ViewChild, ApplicationRef } from '@angular/core';
import { NavController, NavParams, IonicPage, IonicApp } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CharitiesPage } from '../charities/charities';
import { PaymentsPage } from '../payments/payments';
import { PortfolioPage } from '../portfolio/portfolio';
import Chart from 'chart.js';
import { Cryptoanimal } from '../../models/cryptoanimal';
import { Charity } from '../../models/charity';
import { User } from '../../models/user';
import { Donation } from '../../models/donation';
import { CryptoanimalPage } from '../cryptoanimal/cryptoanimal';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  
  icons: string;
  @ViewChild('doughnutCanvas') doughnutCanvas;
 
  doughnutChart: any;

  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;

  public charities: Array<Charity> = [];
  public user: User = new User();
  public charity: Charity = new Charity();
  public amount: number;
  public donation_total: number = 0;
  public donation_count: number = 0;
  public donations: Array<Donation> = [];
  public cryptoanimal_count: number = 0;

  public cryptoanimals: Array<Cryptoanimal> = [];

  grid: Array<Array<Cryptoanimal>>; //array of arrays of cryptoanimals
  user_info: Array<User> = [];

 
  constructor(public navCtrl: NavController, public navParams: NavParams, private appRef: ApplicationRef,
    public http: Http) {
    this.icons = "logo-octocat";

    // var cryptoanimal1 = new Cryptoanimal();
    // cryptoanimal1.animal_id = 1;
    // cryptoanimal1.name = "Crypto Toucan";
    // cryptoanimal1.img = "../../assets/imgs/cryptotoucan.gif";
    // cryptoanimal1.description = "Toucans are members of the Neotropical bird family Ramphastidae.They are brightly marked and have large, often-colorful bills. The family includes five genera and over forty different species.";
    // cryptoanimal1.price = 300 ;
    // cryptoanimal1.status = "endangered";
    // cryptoanimal1.habitat = "Rainforest";

  
    // var cryptoanimal2 = new Cryptoanimal();
    // cryptoanimal2.animal_id = 2;
    // cryptoanimal2.name = "Crypto Frog";
    // cryptoanimal2.img = "../../assets/imgs/cryptofrog.gif";
    // cryptoanimal2.description = "Frogs are valued as food by humans and also have many cultural roles in literature, symbolism and religion. Frog populations have declined significantly since the 1950s. More than one third of species are considered to be threatened with extinction and over one hundred and twenty are believed to have become extinct since the 1980s.";
    // cryptoanimal2.price = 180 ;
    // cryptoanimal2.status = " critically endangered";
    // cryptoanimal2.habitat = "Rainforest";


    // var cryptoanimal3 = new Cryptoanimal();
    // cryptoanimal3.animal_id = 3;
    // cryptoanimal3.name = "Crypto Cougar";
    // cryptoanimal3.img = "../../assets/imgs/cryptocougar.gif";
    // cryptoanimal3.description = "The cougar is an ambush predator that pursues a wide variety of prey. Intensive hunting following European colonization of the Americas and the ongoing human development of cougar habitat has caused populations to drop in most parts of its historical range.";
    // cryptoanimal3.price = 170 ;
    // cryptoanimal3.status = " critically endangered";
    // cryptoanimal3.habitat = "Dessert, Africa";

    // var cryptoanimal4 = new Cryptoanimal();
    // cryptoanimal4.animal_id = 4;
    // cryptoanimal4.name = "Crypto Hippo";
    // cryptoanimal4.img = "../../assets/imgs/cryptohippo.gif";
    // cryptoanimal4.description = "The hippopotamus is among the most dangerous animals in the world as it is highly aggressive and unpredictable. They are threatened by habitat loss and poaching for their meat and ivory canine teeth.";
    // cryptoanimal4.price = 150 ;
    // cryptoanimal4.status = "endangered";
    // cryptoanimal4.habitat = "Savanna, Africa";


    // var cryptoanimal5 = new Cryptoanimal();
    // cryptoanimal5.animal_id = 5;
    // cryptoanimal5.name = "Crypto Ferret";
    // cryptoanimal5.img = "../../assets/imgs/cryptoferret.gif";
    // cryptoanimal5.description = "Ferrets spend 14–18 hours a day asleep and are most active around the hours of dawn and dusk, meaning they are crepuscular. Unlike their polecat ancestors, which are solitary animals, most ferrets will live happily in social groups. A group of ferrets is commonly referred to as a business. They are territorial, like to burrow, and prefer to sleep in an enclosed area.";
    // cryptoanimal5.price = 100 ;
    // cryptoanimal5.status = "vulnerable";
    // cryptoanimal5.habitat = "Global";


    // var cryptoanimal6 = new Cryptoanimal();
    // cryptoanimal6.animal_id = 6;
    // cryptoanimal6.name = "Crypto Penguin";
    // cryptoanimal6.img = "../../assets/imgs/cryptopenguin.gif";
    // cryptoanimal6.description = "Among extant penguins, larger penguins inhabit colder regions, while smaller penguins are generally found in temperate or even tropical climates";
    // cryptoanimal6.price = 400;
    // cryptoanimal6.status = "vulnerable";
    // cryptoanimal6.habitat = "Southern Hemisphere";

    
    // var cryptoanimal7 = new Cryptoanimal();
    // cryptoanimal7.animal_id = 7;
    // cryptoanimal7.name = "Crypto Bug";
    // cryptoanimal7.img = "../../assets/imgs/cryptobug.gif";
    // cryptoanimal7.description = "A classification of thousands of species, incluing spiders, cockroaches, and flies.";
    // cryptoanimal7.price = 1000 ;
    // cryptoanimal7.status = "safe";
    // cryptoanimal7.habitat = "Global";

    // var cryptoanimal8 = new Cryptoanimal();
    // cryptoanimal8.animal_id = 8;
    // cryptoanimal8.name = "Crypto Koala";
    // cryptoanimal8.img = "../../assets/imgs/cryptokoala.gif";
    // cryptoanimal8.description = "Koalas typically inhabit open eucalypt woodlands, and the leaves of these trees make up most of their diet. Because this eucalypt diet has limited nutritional and caloric content, koalas are largely sedentary and sleep up to 20 hours a day. ";
    // cryptoanimal8.price = 225 ;
    // cryptoanimal8.status = "vulnerable";
    // cryptoanimal8.habitat = "Australia";

    // this.cryptoanimals.push(cryptoanimal1);
    // this.cryptoanimals.push(cryptoanimal2);
    // this.cryptoanimals.push(cryptoanimal3);
    // this.cryptoanimals.push(cryptoanimal4);
    // this.cryptoanimals.push(cryptoanimal5);
    // this.cryptoanimals.push(cryptoanimal6);
    // this.cryptoanimals.push(cryptoanimal7);
    // this.cryptoanimals.push(cryptoanimal8);

  }

  donation_list() {  this.http
    .get("http://localhost:3000/users/" + this.user.user_id + "/donations") 
    .subscribe (
      Result => {
      console.log(Result);
      this.donations = Result.json() as Array<Donation>;
      
      for(let i = 0; i < this.donations.length; i++) {
        this.donation_total += this.donations[i].amount;
      }
      this.donation_count = this.donations.length;
  
      },
      Error => {
      console.log(Error);
      }
      );  
  
  }

  cryptoanimal_list() {  this.http
    .get("http://localhost:3000/users/" + this.user.user_id + "/cryptoanimals") 
    .subscribe (
      Result => {
      console.log(Result);
      this.cryptoanimals = Result.json() as Array<Cryptoanimal>;

      this.cryptoanimal_count = this.cryptoanimals.length;
      console.log(this.cryptoanimal_count + "No of Cryptoanimalia")


        this.grid = Array(Math.ceil(this.cryptoanimals.length/4)); //MATHS!

        const num_cols = 4;

        for (let i = 0; i < this.cryptoanimals.length; i += num_cols) {
          //console.log('making row')
          //console.log("starting at index" + i);
          this.grid[Math.floor(i / num_cols)] = this.cryptoanimals.slice(i, i + num_cols);
        }
      },
      Error => {
      console.log(Error);
      }
      );  
  
  }
  // cryptoanimalia() {  this.http
  //   .get("http://localhost:3000/cryptoanimals") 
  //   .subscribe (
  //     Result => {
  //     console.log(Result);
  //     this.cryptoanimals = Result.json() as Array<Cryptoanimal>;
    
  //     },
  //     Error => {
  //     console.log(Error);
  //     }
  //     );  
  
  // }

   

  profile_info() {  this.http
    .get("http://localhost:3000/users/" + this.user.user_id) 
    .subscribe (
      Result => {
      console.log(Result);
      this.user_info = Result.json() as Array<User>;
    
      },
      Error => {
      console.log(Error);
      }
      );  
  
  }


  // cryptoanimals() {  this.http
  //   .get("http://localhost:3000/users/" + this.user.user_id) 
  //   .subscribe (
  //     Result => {
  //     console.log(Result);
  //     this.user_info = Result.json() as Array<User>;
    
  //     },
  //     Error => {
  //     console.log(Error);
  //     }
  //     );  
  
  // }

  ionViewDidLoad() {
    this.donation_list();
    this.profile_info();
    this.cryptoanimal_list();
    // this.firstName = this.navParams.get("firstName");
    // this.lastName = this.navParams.get("lastName");
    // this.email = this.navParams.get("email");
    // this.password = this.navParams.get("password");

    //this.token = localStorage.getItem("TOKEN");
    //console.log(profile token: ", this.token);
    //Comment out getting the navParams email and password


    setTimeout(() => {
      this.appRef.tick();
    }, 1000);
    


  //   this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
  //     type: 'doughnut',
  //     data: {
  //         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //         datasets: [{
  //             label: '# of Votes',
  //             data: [12, 19, 3, 5, 2, 3],
  //             backgroundColor: [
  //                 'rgba(255, 99, 132, 0.2)',
  //                 'rgba(54, 162, 235, 0.2)',
  //                 'rgba(255, 206, 86, 0.2)',
  //                 'rgba(75, 192, 192, 0.2)',
  //                 'rgba(153, 102, 255, 0.2)',
  //                 'rgba(255, 159, 64, 0.2)'
  //             ],
  //             hoverBackgroundColor: [
  //                 "#FF6384",
  //                 "#36A2EB",
  //                 "#FFCE56",
  //                 "#FF6384",
  //                 "#36A2EB",
  //                 "#FFCE56"
  //             ]
  //         }]
  //     }

  // });
  }
  
  navigateToHome() {
    this.navCtrl.push(HomePage, {
      user: this.user,
      charity: this.charity
  });
}

  navigateToCharities() {
    this.navCtrl.push(CharitiesPage, {
      user: this.user,
      charity: this.charity
  });
}


  navigateToProfile() {
    this.navCtrl.push(ProfilePage, {
      user: this.user,
      charity: this.charity
  });

  }

  navigateToPayments() {
    this.navCtrl.push(PaymentsPage, {
      user: this.user,
      charity: this.charity
  });
}

  navigateToPortfolio() {
    this.navCtrl.push(PortfolioPage, {
      user: this.user,
      charity: this.charity,
      amount: this.amount,
    });

  }

  navigateToCryptoanimal(cryptoanimal: Cryptoanimal) {
    this.navCtrl.push(CryptoanimalPage, {
        user: this.user,
        cryptoanimal: cryptoanimal

    }
  );

  }

  
}
   