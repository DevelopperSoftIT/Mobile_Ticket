import { ResumeBookPage } from './../resume-book/resume-book';
import { GlobalVars } from './../../providers/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-info-client',
  templateUrl: 'info-client.html',
})
export class InfoClientPage {
   client?:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.client=GlobalVars.getClient()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoClientPage');
  }
  goToResumeInfoClient(){
    this.navCtrl.setRoot(ResumeBookPage)
  }

}
