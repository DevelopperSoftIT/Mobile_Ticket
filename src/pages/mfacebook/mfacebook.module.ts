import { Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MfacebookPage } from './mfacebook';
import { createTranslateLoader } from '../../providers/createTranslateLoader';

@NgModule({
  declarations: [
    MfacebookPage,
  ],
  imports: [
    IonicPageModule.forChild(MfacebookPage),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
  ],
  exports: [
    MfacebookPage
  ]
})
export class MfacebookPageModule { }
