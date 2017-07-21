import { GlobalVars } from './../../providers/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TimerCountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-timer-count',
  templateUrl: 'timer-count.html',
})
export class TimerCountPage {
  client?:string;
  delayTicket: number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.client=GlobalVars.getClient()
    this.delayTicket = this.navParams.get('delay');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimerCountPage');
  }

}
