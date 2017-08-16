import { Restservice } from './../../providers/restservice';
import { Common } from './../../providers/common';
import { GlobalVars } from './../../providers/global';
import { Component } from '@angular/core';
import {  NavController, NavParams, PopoverController } from 'ionic-angular';
import { InfoClientPage } from "../booking-info-client/info-client";

/**
 * Generated class for the CalendarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  localDate: any;
  client?: string;
  seldate: any;
  times: any;
  bookDate: any;
  bookTime: any;
  idService: any;
  idBranch: any;
  branch: any;
  service: any;
  brancheName: string;
  serviceName: string;
  iserror: boolean;
  constructor(private common:Common,
      private navParams: NavParams,
      public navCtrl: NavController,
      private restservice:Restservice,
      private popoverCtrl: PopoverController) {
    this.client=GlobalVars.getClient()
    this.branch=navParams.get('branch');
    this.service=navParams.get('service');
        this.idBranch=this.branch.publicId;
        this.idService=this.service.publicId;
        this.brancheName = this.branch.name;
        this.serviceName = this.service.name;
        console.log(this.branch)
        console.log(this.service)
        console.log(`branch : ${this.branch} + service ${this.service} `)
    // this.localDate= new Date();
  }

  ionViewDidLoad() {
    this.getBokkingDate(this.idBranch, this.idService);
    console.log('ionViewDidLoad CalendarPage');
  }


 getBokkingDate(idBranch, idService){
    this.common.presentLoadingDefault();
    console.log("CalendarPage.getBokkingDate :");
    this.restservice.getBookDateAvailable(idBranch,idService).subscribe(bookDate =>{
      console.log('data a '+bookDate)
    this.bookDate=bookDate.dates;
      // var a=data.results
      console.log(this.bookDate)
      this.common.loadingfinish()
      this.common.toastInfo(this.common.getTranslate("Servicepage.nameservice"));
      this.iserror=false;
          },
      error=>{
        console.log("CalendarPage.getBokkingDate.error :");
        this.common.loadingfinish();
        this.iserror=true;
        this.common.toastErrorRetry(() =>{this.getBokkingDate(this.idBranch,this.idService)});
        console.log("CalendarPage.getBokkingDate.error status : "+ error.status)}
      )
    }
    /**
     * get book time
     * @param idBranch
     * @param idService
     * @param date
     */
 getBokkingTime(idBranch, idService,date){
    this.common.presentLoadingDefault();
    console.log("CalendarPage.getBokkingTime :");
    this.restservice.getBookTimeAvailable(idBranch,idService,date).subscribe(bookTime =>{
      console.log('data a '+bookTime)
    this.bookTime=bookTime.times;
      // var a=data.results
      console.log(this.bookTime)
      this.common.loadingfinish()
      // this.common.toastInfo(this.common.getTranslate("Servicepage.nameservice"));
      this.iserror=false;
          },
      error=>{
        console.log("CalendarPage.getBokkingTime.error :");
        this.common.loadingfinish();
        this.iserror=true;
        this.common.toastErrorRetry(() =>{this.getBokkingTime(this.idBranch,this.idService,date)});
        console.log("CalendarPage.getBokkingTime.error status : "+ error.status)}
      )
    }

    getTime(){
      this.getBokkingTime(this.idBranch, this.idService, this.seldate)
    }
    /**
     * go to page Client info
     */
goInfoClient(){
  if(this.seldate != null && this.times != null){
    this.navCtrl.push(InfoClientPage,{branch: this.branch, service: this.service, dates:this.seldate, times: this.times})

  }
}
}
