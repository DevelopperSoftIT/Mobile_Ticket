import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoClientPage } from './info-client';

@NgModule({
  declarations: [
    InfoClientPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoClientPage),
  ],
  exports: [
    InfoClientPage
  ]
})
export class InfoClientPageModule {}
