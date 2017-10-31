import { Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SociaciauxPage } from './sociaciaux';
import { createTranslateLoader } from '../../providers/createTranslateLoader';

@NgModule({
  declarations: [
    SociaciauxPage,
  ],
  imports: [
    IonicPageModule.forChild(SociaciauxPage),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
  ],
  exports: [
    SociaciauxPage
  ]
})
export class SociaciauxPageModule { }
