import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecialMessagesPage } from './special-messages';

@NgModule({
  declarations: [
    SpecialMessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(SpecialMessagesPage),
  ],
})
export class SpecialMessagesPageModule {}
