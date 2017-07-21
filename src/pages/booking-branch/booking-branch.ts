import { BookingServicePage } from './../booking-service/booking-service';
import { GlobalVars } from './../../providers/global';
import { DistanceCalculatorProvider } from './../../providers/distance-calculator/distance-calculator';
import { TranslateService } from '@ngx-translate/core';
import { Restservice } from './../../providers/restservice';
import { Common } from './../../providers/common';
import { ServicePage } from './../service/service';
import { GlobalConstant } from './../../providers/constants';
import { PopoverPage } from './../popover/popover';
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage, NavController, NavParams, ToastController, AlertController, PopoverController } from 'ionic-angular';

/**
 * Generated class for the BookingBranchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
  /*getAgence() {
    this.common.presentLoadingDefault();
    this.restservice.getAllbranches().subscribe(Agences => {

        console.log('data a ' + Agences)
        Agences = this.branche = Agences;
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
        this.common.toastErrorRetry(() => {this.getAgence()} );
        // this.presentToast();
        // this.common.toastError(this.getAgence);
        console.log("status "+error.status)
        console.log("error: " +this.iserror);

      }
      //this.loadingfinish();
    )
  }*/

  //fonction de verification de l'heur d'ouverture et fermeture des branches
 /* brancheIsOpenOrClose(b):boolean{
     let datenow=Date.now()
     var date=new Date(datenow);
     var time=date.getHours();
     const [oph, opmin] =b.openTime.split(':')
     const [clh, clm] = b.closeTime.split(':')
     console.log(`${time}/ time open ${b.name} orchestra ${oph}`)
     console.log(`${time}/ time close orchestra ${clh}`)
    //  console.log(openTime+':'+closeTime)
     if(+time > +oph && +time < +clh){
       // this.removeBranche(b);
        return false;
     }else{
      //return false;
     }

    return true;
  }*/


  /**item taped */
  itemTaped(branch) {
    this.navCtrl.push(BookingServicePage, { branch: branch });
    // console.log("taped" + branche.id);
  }
  /**
   * Recuperer les cordonnées de geolocalisation
  getCordonat(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(`longitude : ${resp.coords.longitude} latitude : ${resp.coords.latitude}`)
    this.latitude = resp.coords.latitude;
    this.longitude = resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
   */
  /**
   * getdistance
   */
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
