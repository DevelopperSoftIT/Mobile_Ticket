import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MapsComponent } from './maps';

@NgModule({
  declarations: [
    MapsComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    MapsComponent
  ]
})
export class MapsComponentModule {}
