import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BacksplashPage } from './backsplash';

@NgModule({
  declarations: [
    BacksplashPage,
  ],
  imports: [
    IonicPageModule.forChild(BacksplashPage),
  ],
})
export class BacksplashPageModule {}
