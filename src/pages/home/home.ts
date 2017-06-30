import { Common } from './../../providers/common';
import { GlobalVars } from './../../providers/global';
import { PrdvPage } from './../prdv/prdv';
import { PopoverPage } from './../popover/popover';
import { Component } from '@angular/core';
import { NavController,PopoverController } from 'ionic-angular';
import {ListagencePage}  from'../listagence/listagence'
import {MarketingPage} from '../marketing/marketing'
import {TranslateService} from '@ngx-translate/core';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',



})
export class HomePage {
  client:string
  constructor(private globalvars:GlobalVars,
    private navCtrl: NavController,
    private translate: TranslateService,
    private popoverCtrl: PopoverController,
    private geolocation: Geolocation,
    private common:Common) {
    this.client=GlobalVars.getClient();
  }
  private passnew(){
  this.navCtrl.push(ListagencePage);
    console.log("test");
  } /*
   private parametreshow(){
  this.navCtrl.push(Parametre);
    console.log("test");
  }
  private showServices() {
  //  this.navCtrl.push(ServicePage);
  }*/
  private showMarketing() {
    this.navCtrl.push(MarketingPage);
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
     this.getCordonat();

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  pageprdv(){
    this.navCtrl.push(PrdvPage);
  }
  /**
   * Recuperer les cordonnées de geolocalisation
   */
  getCordonat(){
    this.common.presentLoadingDefault();
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(`longitude : ${resp.coords.longitude}  latitude : ${resp.coords.latitude}`)
    this.globalvars.setLatitude(resp.coords.latitude);
    this.globalvars.setLongitude(resp.coords.longitude);
    this.common.loadingfinish()
  }).catch((error) => {
    this.common.loadingfinish()
      console.log('Error getting location', error);
    });
  }


}
