import { MtwitterPage } from './../mtwitter/mtwitter';
import { MfacebookPage } from './../mfacebook/mfacebook';
import { MarketingPage } from './../marketing/marketing';
import { TranslateService } from '@ngx-translate/core';
import { GlobalVars } from './../../providers/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sociaciaux',
  templateUrl: 'sociaciaux.html',
})
export class SociaciauxPage {
  client: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private translate: TranslateService, ) {
    this.client = GlobalVars.getClient()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SociaciauxPage');
  }
  goToMarketing() {
    this.navCtrl.push(MarketingPage);
  }
  goToFbMarketing() {
    this.navCtrl.push('MfacebookPage');
  }
  goToTwMarketing() {
    this.navCtrl.push('MtwitterPage');
  }

}
