import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharityProfilePage } from './charity_profile';

@NgModule({
  declarations: [
    CharityProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(CharityProfilePage),
  ],
})
export class CharityProfilePageModule {}
