import { Common } from './../../providers/common';
import { Restservice } from './../../providers/restservice';
import { GlobalVars } from './../../providers/global';
import { GlobalConstant } from './../../providers/constants';
import { PopoverPage } from './../popover/popover';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, AlertController } from 'ionic-angular';
import { CalendarPage } from "../booking-calendar/calendar";

/**
 * Generated class for the BookingServicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-booking-service',
  templateUrl: 'booking-service.html',
})
export class BookingServicePage {

  movies: Array<any>;
    Service:Array<any>;
    brancheName?:string ;
    branch: any;
    loading: any;
    client?:string;
    iserror: boolean = false;
    id:number;
    startRefrech:number=1;
    constructor(
      private common:Common,
      private navParams: NavParams,
      public navCtrl: NavController,
      public alertCtrl: AlertController,
      private restservice:Restservice,
      private popoverCtrl: PopoverController) {
        this.client=GlobalVars.getClient()
        this.branch=navParams.get('branch');
        this.id=this.branch.publicId;
        this.brancheName=this.branch.name;
        console.log("this.id "+this.id);

    }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // this.startRefrech=true;
    // this.startRefreshTim()
    console.log("startRefreshTim begin")
    this.startRefrech =setInterval(()=>{
      console.log("startRefreshTim begin")
      this.refleshService(this.id)
    }, GlobalConstant.SERVICE_FETCH_INTERVAL)

  }
  /*ngOnDestroy() {
  if (this.startRefrech) {
    console.log("clearInterval begin")
    clearInterval(this.startRefrech);
  }
}*/

  ionViewDidLoad(){
    this.getService(this.id);
  }
  ionViewWillLeave() {
    console.log("Quiter la page service")
    if (this.startRefrech) {
      console.log("clearInterval ionViewWillLeave")
    clearInterval(this.startRefrech);
   }
    //this.common.toastErrorRetry(null);
    //  this.common.toastErrorRetry(() =>{this.getService(this.id)},false);
    // this.common.destoryToast();
    //  this.startRefrech=false;
   //this.startRefreshTim()
  }
  /*startRefreshTim(){
    console.log("startRefreshTim begin")
    if(this.startRefrech){
      console.log("startRefres etat "+this.startRefrech)
      setInterval(()=>{this.refleshService(this.id)},15000)
    }
    console.log("startRefreshTim end")
  }*/
  /**
   * @param id reflesh service id
   */

  refleshService(id){
    console.log("ServicePage.refleshService : start");
    this.restservice.getBookServiceFromBranche(id).subscribe(Service =>{
      console.log('data a '+Service)
      this.Service=Service.serviceList;
      // var a=data.results
      console.log(Service)
    //  this.common.loadingfinish()
     // this.common.toastInfo(this.common.getTranslate("Servicepage.nameservice"));
      this.iserror=false;
          },
      error=>{
        console.log("ServicePage.getService.error :");
    ///    this.common.loadingfinish();
       // this.iserror=true;
        //this.common.toastErrorRetry(() =>{this.getService(this.id)});
        console.log("Service"+ error.status)}
      )
      console.log("ServicePage.refleshService : end");
  }
  getService(id){
    this.common.presentLoadingDefault();
    console.log("ServicePage.getService :");
    this.restservice.getBookServiceFromBranche(id).subscribe(Service =>{
      console.log('data a '+Service)
    this.Service=Service.serviceList;
      // var a=data.results
      console.log(Service)
      this.common.loadingfinish()
      this.common.toastInfo(this.common.getTranslate("Servicepage.nameservice"));
      this.iserror=false;
          },
      error=>{
        console.log("ServicePage.getService.error :");
        this.common.loadingfinish();
        this.iserror=true;
        this.common.toastErrorRetry(() =>{this.getService(this.id)});
        console.log("Service"+ error.status)}
      )
    }

  /**item taped */
  itemTaped(service){
    this.navCtrl.push(CalendarPage)
    // this.navCtrl.setRoot(Showticket,{id:service.serviceId,idbr:this.id,sernam:service.serviceName,branchename:this.brancheName});
    // this.navCtrl.push(DelayTicketPage,{service : service, brancheName: this.brancheName, brancheId: this.id})
    console.log("ServicePage.itemTaped"+ service);
  }
  /**
   * show pop over
   * @param myEvent
   */
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage,{"activeAcueil":false});
    popover.present({
      ev: myEvent
    });
  }

  }
