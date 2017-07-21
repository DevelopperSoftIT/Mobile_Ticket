import { ErrorComponent } from './../../components/error/error';
import { Http } from '@angular/http';
import { createTranslateLoader } from '../../providers/createTranslateLoader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingBranchPage } from './booking-branch';

@NgModule({
  declarations: [
    BookingBranchPage,

  ],
  imports: [
    IonicPageModule.forChild(BookingBranchPage),
     TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
  ],
  exports: [
    BookingBranchPage
  ]
})
export class BookingBranchPageModule {}
