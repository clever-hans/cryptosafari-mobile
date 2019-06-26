import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CharityProfilePage } from '../charity_profile/charity_profile';
import { Charity } from '../../models/charity';
import { PortfolioPage } from '../portfolio/portfolio';
import { ProfilePage } from '../profile/profile';
import { User } from '../../models/user';
import { Donation } from '../../models/donation';
import { Http } from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-charities',
  templateUrl: 'charities.html',
})
export class CharitiesPage {

  icons: string;
  public charities: Array<Charity> = [];
  public user: User = new User();
  public charity: Charity = new Charity();
  public amount: number;
  public donation: Donation = new Donation();
  //public charity_list: Charity = newArray<Charity> = [];
  
  grid: Array<Array<Charity>>; //array of arrays of charities

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.icons = "charities";
    
  //Instantiate a new charity instance
    // var charity1 = new Charity();
    // charity1.charity_id = 1;
    // charity1.name = "Giving Back to Africa";
    // charity1.mission = "Give back to Africa. Help bring the rains.";
    // charity1.description = "Help bring the rains back to Africa. We'll use our funding to call Toto.";
    // charity1.img = "../../assets/imgs/logos/.png";
    // charity1.location = "Africa";


    // var charity2 = new Charity();
    // charity2.charity_id = 2;
    // charity2.name = "GWC";
    // charity2.mission = "Global Wildlife Commission - dedicated to saving crypto wildlife in Africa.";
    // charity2.description = "We love bitcoin and wildlife, and neither is safe without our help. Help donate to a project to save Africa.";
    // charity2.img = "../../assets/imgs/logos/GWC.png";
    // charity2.location = "Africa";


    // var charity3 = new Charity();
    // charity3.charity_id = 3;
    // charity3.name = "Helping Rhinos";
    // charity3.mission = "We'll help the rhinos find their new home.";
    // charity3.description = "Rhino tusks are being taken, and soon they'll end up like the dinosaurs. Help us defeat their predators.";
    // charity3.img = "../../assets/imgs/logos/HelpingRhinos.png";
    // charity3.location = "Africa";


    // var charity4 = new Charity();
    // charity4.charity_id = 4;
    // charity4.name = "IUCN";
    // charity4.mission = "International Union for Common Noises. Help keep animals loud.";
    // charity4.description = "Help us help the animals with everything to do with their voices. They'll learn to sing and to project their calls!";
    // charity4.img = "../../assets/imgs/logos/iucn-logo.png";
    // charity4.location = "Africa";


    // var charity5 = new Charity();
    // charity5.charity_id = 5;
    // charity5.name = "Turtle Conservancy";
    // charity5.mission = "I've helped save more than a few turtles!";
    // charity5.description = "Help save turtles while they're swimming and before they even get into the water.";
    // charity5.img = "../../assets/imgs/logos/Turtle-Conservancy.png";
    // charity5.location = "Africa";

    
    // var charity6 = new Charity();
    // charity6.charity_id = 6;
    // charity6.name = "WCN";
    // charity6.mission = "Wild Coin Network - an international coalition to bring ICOs to animals everywhere.";
    // charity6.description = "Creating a global currency for animals, one that's decentralized and doesn't rely on central animal banks!";
    // charity6.img = "../../assets/imgs/logos/WCN.png";
    // charity6.location = "Africa";


    // var charity7 = new Charity();
    // charity7.charity_id = 7;
    // charity7.name = "WCS";
    // charity7.mission = "Wild Coin Sales - help our sales teams around the world sell bitcoin to animals.";
    // charity7.description = "The wild coin sales network is dedicated to help sell bitcoin to animals. We plan to ICO with every species.";
    // charity7.img = "../../assets/imgs/logos/wcs_logo.png";
    // charity7.location = "Africa";
    
    // var charity8 = new Charity();
    // charity8.charity_id = 8;
    // charity8.name = "Wildlands";
    // charity8.mission = "Wild land reform across Africa and the globe.";
    // charity8.description = "We're dedicated to helping reform and revitalize wildlands in Africa and around the world. Help stop deforestation!";
    // charity8.img = "../../assets/imgs/logos/wildlands.png";
    // charity8.location = "Africa";

    // this.charities.push(charity1);
    // this.charities.push(charity2);
    // this.charities.push(charity3);
    // this.charities.push(charity4);
    // this.charities.push(charity5);
    // this.charities.push(charity6);
    // this.charities.push(charity7);
    // this.charities.push(charity8);

    //console.log(this.grid);
  }
  

  ionViewDidLoad() {
    this.charity_list();
  }

  

  navigateToHome() {
    this.navCtrl.push(HomePage, {
      user: this.user
  });

  }

  charity_list() {  this.http
    .get("http://localhost:3000/charities") 
    .subscribe (
      Result => {
        console.log(Result);
        this.charities = Result.json() as Array<Charity>;

        // specify number of rows page should have; each row will have four columns
        this.grid = Array(Math.ceil(this.charities.length / 4)); //MATHS!

        const num_cols = 4;
    
        for (let i = 0; i < this.charities.length; i += num_cols) {
          //console.log('making row')
          //console.log("starting at index" + i);
          this.grid[Math.floor(i / num_cols)] = this.charities.slice(i, i + num_cols);
        }
      },
      Error => {
        console.log(Error);
      }
    );
  }

  navigateToPortfolio() {
    this.navCtrl.push(PortfolioPage, {
      user: this.user,
      charity: this.charity,
      amount: this.amount,
    });

  }
  navigateToProfile() {
    this.navCtrl.push(ProfilePage, {
      user: this.user
  });
  }

  navigateToCharityProfile(charity: Charity) {
    this.navCtrl.push(CharityProfilePage, {
        charity: charity,
        user: this.user
    }
  );

  }

}
