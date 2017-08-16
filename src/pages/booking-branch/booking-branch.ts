import { BookingServicePage } from './../booking-service/booking-service';
import { GlobalVars } from './../../providers/global';
import { DistanceCalculatorProvider } from './../../providers/distance-calculator/distance-calculator';
import { TranslateService } from '@ngx-translate/core';
import { Restservice } from './../../providers/restservice';
import { Common } from './../../providers/common';
import { GlobalConstant } from './../../providers/constants';
import { PopoverPage } from './../popover/popover';
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage, NavController, ToastController, AlertController, PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-booking-branch',
  templateUrl: 'booking-branch.html',
})
export class BookingBranchPage {
 movies: Array<any>;
  branche: Array<any>;
  loading: any;
  ecoute: boolean = false;
  iserror: boolean = false;
  client:string;
  longitude : number;
  latitude : number
  longitudeFromBranche : number;
  latitudeFromBranche : number;
  startRefrech:number=1;

  constructor(private toastCtrl: ToastController,
    private common: Common,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private restservice: Restservice,
    private translate: TranslateService,
    private geolocation: Geolocation,
    private calculateDistanceProvider:DistanceCalculatorProvider,
    private popoverCtrl: PopoverController,
    private globalvars:GlobalVars) {

    this.client=GlobalVars.getClient()
    this.longitude=GlobalVars.getLongitude()
    this.latitude=GlobalVars.getLatitude()

  }

  ionViewDidLoad() {
    console.log('load enter')
    //  this.getCordonat();
    this.getBookBranche();
   // this.calculatorDistance();
  }
  ionViewWillLeave() {
    console.log("Quiter la page Agence")
    if (this.startRefrech) {
      console.log("clearInterval ionViewWillLeave")
    clearInterval(this.startRefrech);
   }}

  ngAfterViewInit() {
    this.startRefrech =setInterval(()=>{
      console.log("startRefreshTim begin")
      this.refleshCordonat();
    }, GlobalConstant.BRANCH_REFRESH_TIMER)
  }

  getBookBranche() {
    this.common.presentLoadingDefault();
    // this.restservice.getAllbranches().subscribe(Agences => {
    this.restservice.getBookAllbranches()
      .subscribe(Agences => {
        console.log('data a ' + Agences)
       this.branche = Agences.branchList;
        console.log(Agences)
        this.common.loadingfinish()
        this.common.toastInfo("Veuillez sélectionner une agence.");

        // var a=data.results
        this.iserror=false;
      },
      (error) => {
        this.iserror=true;
        this.common.loadingfinish();
        // alert(error+'erreur')
        console.log(error)
        this.common.toastErrorRetry(() => {this.getBookBranche()} );
        // this.presentToast();
        // this.common.toastError(this.getAgence);
        console.log("status "+error.status)
        console.log("error: " +this.iserror);

      }
      //this.loadingfinish();
    )
  }
  /**item taped */
  itemTaped(branch) {
    this.navCtrl.push(BookingServicePage, { branch: branch });
    // console.log("taped" + branche.id);
  }
  calculatorDistance(lat2,long2){
  return  this.calculateDistanceProvider.getDistanceBetweenBranchAndClient(this.latitude,this.longitude,lat2,long2)
    //console.log('Distance '+d)
  }
   presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage,{"activeAcueil":false});
    popover.present({
      ev: myEvent
    });
  }
  refleshBranch(){
    this.restservice.getBookAllbranches().subscribe(Agences => {
        console.log('data a ' + Agences)
         this.branche = Agences.branchList;
        console.log(Agences)
        this.iserror=false;
      },
      (error) => {
        this.iserror=true;
        console.log("status "+error.status)
        console.log("error: " +this.iserror);

      }
      //this.loadingfinish();
    )
  }


  refleshCordonat(){
     // this.common.LoadingCustom();
    this.geolocation.getCurrentPosition().then((resp) => {
    console.log(`longitude : ${resp.coords.longitude}  latitude : ${resp.coords.latitude}`)
    this.globalvars.setLatitude(resp.coords.latitude);
    this.globalvars.setLongitude(resp.coords.longitude);
    this.refleshBranch();
    // this.common.LoadingCustomfinish()
  }).catch((error) => {
    this.globalvars.setLatitude(0);
    this.globalvars.setLongitude(0);
      //  this.common.LoadingCustomfinish()
      console.log('Error getting location', error);
    });
  }

}
