import { GlobalVars } from './../../providers/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoClientPage } from "../booking-info-client/info-client";

/**
 * Generated class for the CalendarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  localDate: any;
  client?:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.client=GlobalVars.getClient()
    this.localDate= new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }
goInfoClient(){
  this.navCtrl.push(InfoClientPage)
}
}
