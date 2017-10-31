import { Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MtwitterPage } from './mtwitter';
import { createTranslateLoader } from '../../providers/createTranslateLoader';

@NgModule({
  declarations: [
    MtwitterPage,
  ],
  imports: [
    IonicPageModule.forChild(MtwitterPage),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
  ],
  exports: [
    MtwitterPage
  ]
})
export class MtwitterPageModule { }
