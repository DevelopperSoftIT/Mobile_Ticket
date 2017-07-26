  import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResumeBookPage } from './resume-book';

@NgModule({
  declarations: [
    ResumeBookPage,
  ],
  imports: [
    IonicPageModule.forChild(ResumeBookPage),
  ],
  exports: [
    ResumeBookPage
  ]
})
export class ResumeBookPageModule {}

