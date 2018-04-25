import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecialMessagePage } from './special-message';

@NgModule({
  declarations: [
    SpecialMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(SpecialMessagePage),
  ],
})
export class SpecialMessagePageModule {}
