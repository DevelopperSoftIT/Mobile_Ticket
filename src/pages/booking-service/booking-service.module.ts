import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingServicePage } from './booking-service';

@NgModule({
  declarations: [
    BookingServicePage,
  ],
  imports: [
    IonicPageModule.forChild(BookingServicePage),
  ],
  exports: [
    BookingServicePage
  ]
})
export class BookingServicePageModule {}
