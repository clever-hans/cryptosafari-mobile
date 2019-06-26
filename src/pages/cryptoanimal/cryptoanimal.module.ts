import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CryptoanimalPage } from './cryptoanimal';

@NgModule({
  declarations: [
    CryptoanimalPage,
  ],
  imports: [
    IonicPageModule.forChild(CryptoanimalPage),
  ],
})
export class CryptoanimalPageModule {}
