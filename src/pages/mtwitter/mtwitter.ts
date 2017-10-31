import { TranslateService } from '@ngx-translate/core';
import { GlobalVars } from './../../providers/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MtwitterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mtwitter',
  templateUrl: 'mtwitter.html',
})
export class MtwitterPage {
  client: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private translate: TranslateService, ) {
    this.client = GlobalVars.getClient()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MtwitterPage');
  }

}
