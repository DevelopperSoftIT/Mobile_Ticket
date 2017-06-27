import { GlobalVars } from './../../shared/global';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Prdv page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-prdv',
  templateUrl: 'prdv.html'
})
export class PrdvPage {
  client?:string;

  constructor(private navCtrl: NavController,
    private navParams: NavParams) {
        this.client=GlobalVars.getClient()

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrdvPage');
  }

}
