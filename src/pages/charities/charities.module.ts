import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharitiesPage } from './charities';

@NgModule({
  declarations: [
    CharitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(CharitiesPage),
  ],
})
export class CharitiesPageModule {}
