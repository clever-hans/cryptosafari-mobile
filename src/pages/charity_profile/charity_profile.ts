import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharitiesPage } from '../charities/charities';
import { Charity } from '../../models/charity';
import { PaymentsPage } from '../payments/payments';
import { Certification } from '../../models/certifications';
import { Project } from '../../models/project';
import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { Http } from '@angular/http';
import { Donation } from '../../models/donation';

/**
 * Generated class for the ApplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charity_profile',
  templateUrl: 'charity_profile.html',
})
export class CharityProfilePage {

  public charity: Charity;
  public user: User = new User();
  public certifications: Array<Certification> = [];
  public projects: Array<Project> = [];
  public donation_total: number = 0;
  public donation_count: number = 0;
  public donations: Array<Donation> = [];

  grid: Array<Array<Certification>>; //array of arrays of certifications
  gridProj: Array<Array<Project>>; //array of arrays of projects
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

  this.charity = this.navParams.get("charity");

  //Instantiate a new certification instance
  var certification1 = new Certification();
  certification1.cert_id = 1;
  certification1.name = "Global Charity Recognition";
  certification1.description = "Provided to Africa's top charity each year";
  certification1.img = "../../assets/imgs/certifications/rainforest.png";
  certification1.year = "2017";


  var certification2 = new Certification();
  certification2.cert_id = 2;
  certification2.name = "Africa's Best Crypto Charity";
  certification2.description = "Given for excellence in crypto charity work";
  certification2.img = "../../assets/imgs/certifications/iso.png";
  certification2.year = "2012";


  var certification3 = new Certification();
  certification3.cert_id = 3;
  certification3.name = "Top 100 Charities for Coders";
  certification3.description = "Recognition for charities that have excellent development environments";
  certification3.img = "../../assets/imgs/certifications/truecharity.png";
  certification3.year = "2017";

  this.certifications.push(certification1);
  this.certifications.push(certification2);
  this.certifications.push(certification3);

  this.grid = Array(Math.ceil(this.certifications.length/3)); //MATHS!

  const num_cols = 3;

  for (let i = 0; i < this.certifications.length; i += num_cols) {
    //console.log('making row')
    //console.log("starting at index" + i);
    this.grid[Math.floor(i / num_cols)] = this.certifications.slice(i, i + num_cols);
  }

  
    //Instantiate a new project instance
    var project1 = new Project();
    project1.project_id = 1;
    project1.name = "Fight the Poachers";
    project1.subhead = "Combat poachers around the world";
    project1.description = "Help us combat poachers and donate to help short PoacherCoin.";
    project1.img = "../../assets/imgs/projects/proj_ideas.png";
  
  
    var project2 = new Project();
    project2.project_id = 2;
    project2.name = "Buy our ICO";
    project2.subhead = "Join in our ICO and receive a few AnimalCoins";
    project2.description = "We're having an ICO and we need your help! Donate to the decentralized future of wildlife conservation.";
    project2.img = "../../assets/imgs/projects/proj_table.png";

    this.projects.push(project1);
    this.projects.push(project2);

    this.gridProj = Array(Math.ceil(this.projects.length/2)); //MATHS!

    const num_colsProj = 2;

    for (let i = 0; i < this.projects.length; i += num_colsProj) {
      //console.log('making row')
      //console.log("starting at index" + i);
      this.gridProj[Math.floor(i / num_colsProj)] = this.projects.slice(i, i + num_colsProj);

  }


  }


  donation_list() {  this.http
    .get("http://localhost:3000/charities/" + this.charity.charity_id + "/donations") 
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
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityProfilePage');
    this.donation_list();
  }

  navigateToCharities() {
    this.navCtrl.push(CharitiesPage, {
      user: this.user
  });

  }

  navigateToPayments(charity: Charity) {
    this.navCtrl.push(PaymentsPage, {
        charity: charity,
        user: this.user,
        project: this.projects,


    });
  }

  navigateToHome() {
    this.navCtrl.push(HomePage, {
      user: this.user

  });

  }
}
