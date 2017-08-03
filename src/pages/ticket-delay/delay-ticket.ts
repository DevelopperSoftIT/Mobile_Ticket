import { Common } from './../../providers/common';
import { GlobalVars } from './../../providers/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TimerCountPage } from "../ticket-timer-count/timer-count";
import { Showticket } from "../ticket-showticket/showticket";


@IonicPage()
@Component({
  selector: 'page-delay-ticket',
  templateUrl: 'delay-ticket.html',
})
export class DelayTicketPage {
  //variable
   client?:string;
   brancheName?:string = "test" ;
   brancheId: any;
   delayTicket:any[]; //list des temps
   services: any; //service selected
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private common:Common) {
    this.client=GlobalVars.getClient()
    //recuperer les paramètre
    this.brancheName=navParams.get('brancheName');
    this.services=navParams.get('service');
    this.brancheId = navParams.get('brancheId');
    console.log(this.services);
    console.log(this.services.serviceId);
    //initialisation des temps d'attente du ticket

    this.delayTicket=[
      {
        title: this.common.getTranslate("ModuleDelayTicketPage.now"),
        delay : 0
      },
      {
        title: this.common.getTranslate("ModuleDelayTicketPage.inFive"),
        delay : 45
      },
      {
        title: this.common.getTranslate("ModuleDelayTicketPage.inTen"),
        delay : 10*60
      },
      {
        title: this.common.getTranslate("ModuleDelayTicketPage.inFifteen"),
        delay : 15*60
      }
      ,
      {
        title: this.common.getTranslate("ModuleDelayTicketPage.inThirty"),
        delay : 30*60
      }
    ]
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DelayTicketPage');
  }

  takeTicket(d){
     this.navCtrl.setRoot(Showticket,{id:this.services.serviceId,idbr:this.brancheId,sernam:this.services.serviceName,branchename:this.brancheName, delay:d.delay});
     /*    if( d.delay == 0 ){
      console.log(d.title)
      console.log(d.delay)
      this.navCtrl.setRoot(Showticket,{id:this.services.serviceId,idbr:this.brancheId,sernam:this.services.serviceName,branchename:this.brancheName, delay:d.delay});

    }else{
    this.navCtrl.push(TimerCountPage,{id:this.services.serviceId,idbr:this.brancheId,sernam:this.services.serviceName,branchename:this.brancheName, delay:d.delay})
    console.log(d.title)
    } */
  }
}
