import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimerCountPage } from './timer-count';

@NgModule({
  declarations: [
    TimerCountPage,
  ],
  imports: [
    IonicPageModule.forChild(TimerCountPage),
  ],
  exports: [
    TimerCountPage
  ]
})
export class TimerCountPageModule {}
