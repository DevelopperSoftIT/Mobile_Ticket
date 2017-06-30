import { Restservice } from './../../providers/restservice';
import { GlobalVars } from './../../providers/global';
import { Common } from './../../providers/common';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from 'ionic-angular';
import { Component} from '@angular/core';
import { ServicePage } from './../service/service';
import { Http } from '@angular/http';
import { NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GlobalConstant } from './../../providers/constants';

@Component({
  selector: 'page-listagence',
  templateUrl: 'listagence.html',

})
export class ListagencePage {
  movies: Array<any>;
  branche: Array<any>;
  loading: any;
  ecoute: boolean = false;
  iserror: boolean = false;
  client:string;
  longitude : number;
  latitude : number

  constructor(private toastCtrl: ToastController,
   /*public loadingCtrl: LoadingController*/
    private common:Common,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private restservice: Restservice,
    private http: Http,
    private translate: TranslateService,
    private geolocation: Geolocation) {
    this.client=GlobalVars.getClient()
    this.longitude=GlobalVars.getLongitude()
    this.latitude=GlobalVars.getLatitude()

  }

  ionViewDidLoad() {
    console.log('load enter')
  //  this.getCordonat();
    this.getAgence();
  }
  ionViewWillLeave() {
    console.log("Quiter la page")
    //this.common.destoryToast();
  }

  /*getRefreche() {
    this.restservice.getAllbranches().subscribe(Agences => {

      console.log('data a ' + Agences)
      Agences = this.branche = Agences;
      //this.loadingfinish();
      // var a=data.results
      console.log(Agences)
      this.iserror=false;
       } , error => {
          this.iserror=true;
          alert(error + 'erreur')
          this.common.loadingfinish();
        }
      //

    )
  }*/

  getAgence() {
    this.common.presentLoadingDefault();
    // this.restservice.getAllbranches().subscribe(Agences => {
    this.restservice.getBranchesWithLocation( this.longitude, this.latitude, GlobalConstant.BRANCH_FETCH_RADIUS).subscribe(Agences => {
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
  itemTaped(branche) {
    this.navCtrl.push(ServicePage, { id: branche.id,name:branche.name });
    console.log("taped" + branche.id);
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

}
