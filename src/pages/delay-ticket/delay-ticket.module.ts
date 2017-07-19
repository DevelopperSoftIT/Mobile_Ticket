import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DelayTicketPage } from './delay-ticket';

@NgModule({
  declarations: [
    DelayTicketPage,
  ],
  imports: [
    IonicPageModule.forChild(DelayTicketPage),
  ],
  exports: [
    DelayTicketPage
  ]
})
export class DelayTicketPageModule {}
