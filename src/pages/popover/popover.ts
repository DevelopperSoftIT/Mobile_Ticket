import { Parametre } from './../parametre/parametre';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html'
})
export class PopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }
   close() {
    this.viewCtrl.dismiss();
  }
  openparametre(){

    this.navCtrl.push(Parametre);
    this.viewCtrl.dismiss();
  }

}
