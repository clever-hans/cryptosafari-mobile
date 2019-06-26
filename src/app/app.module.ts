import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, MenuController, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login'; 
import { RegistrationPage } from '../pages/registration/registration';
import { ProfilePage } from '../pages/profile/profile';
import { CharitiesPage } from '../pages/charities/charities';
import { CharityProfilePage } from '../pages/charity_profile/charity_profile';
import { PaymentsPage } from '../pages/payments/payments';
import { PortfolioPage } from '../pages/portfolio/portfolio';
import { BacksplashPage } from '../pages/backsplash/backsplash';
import {HttpModule} from '@angular/http';
import { AuthService } from '../auth.service';
import { CryptoanimalPage } from '../pages/cryptoanimal/cryptoanimal';
import { ProfileSettingsPage } from '../pages/profile-settings/profile-settings';



@NgModule({ 
  declarations: [
    MyApp,
    HomePage,
    LoginPage, 
    RegistrationPage,
    ProfilePage,
    CharitiesPage,
    CharityProfilePage,
    PaymentsPage,
    PortfolioPage,
    CryptoanimalPage,
    ProfileSettingsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrationPage,
    ProfilePage,
    CharitiesPage,
    CharityProfilePage,
    PaymentsPage,
    PortfolioPage,
    CryptoanimalPage,
    ProfileSettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
