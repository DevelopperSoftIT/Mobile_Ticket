import { GlobalVars } from './../../providers/global';
import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-mfacebook',
  templateUrl: 'mfacebook.html',
})
export class MfacebookPage {

  client: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private translate: TranslateService, ) {
    this.client = GlobalVars.getClient()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MfacebookPage');
  }

}
