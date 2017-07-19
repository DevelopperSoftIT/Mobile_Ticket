import { Showticket } from './../showticket/showticket';
import { GlobalVars } from './../../providers/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
        title: "Now",
        delay : 0
      },
      {
        title: "In 5 Minutes",
        delay : 5
      },
      {
        title: "In 10 Minutes",
        delay : 10
      },
      {
        title: "In 15 Minutes",
        delay : 15
      }
      ,
      {
        title: "In 30 Minutes",
        delay : 30
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DelayTicketPage');
  }

  takeTicket(d){
    if( d.delay == 0 ){
      console.log(d.title)
      console.log(d.delay)
      this.navCtrl.setRoot(Showticket,{id:this.services.serviceId,idbr:this.brancheId,sernam:this.services.serviceName,branchename:this.brancheName, delay:d.delay});

    }
    console.log(d.title)
  }
}
