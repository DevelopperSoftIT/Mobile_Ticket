import { GlobalVars } from './../../providers/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-resume-book',
  templateUrl: 'resume-book.html',
})
export class ResumeBookPage {
  client?:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.client=GlobalVars.getClient()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResumeBookPage');
  }

}
