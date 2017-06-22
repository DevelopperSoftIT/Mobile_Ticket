import { TranslateService } from '@ngx-translate/core';
import { Common } from './../../shared/common';
import { GlobalVars } from './../../shared/global';
import { ToastController } from 'ionic-angular/components/toast/toast';
import { Component} from '@angular/core';
import { ServicePage } from './../service/service';
import { Http } from '@angular/http';
import { NavController} from 'ionic-angular';
import { Restservice } from '../../app/restservice/restservice'
import { AlertController } from 'ionic-angular';
declare var MobileTicketAPI: any;
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
  client:string

  constructor(private toastCtrl: ToastController,
   /*public loadingCtrl: LoadingController*/private common:Common,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private restservice: Restservice,
    private http: Http,
    public translate: TranslateService) {
    this.client=GlobalVars.getClient()

  }

  ionViewDidLoad() {
    console.log('load enter')
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
  }

  /**item taped */
  itemTaped(branche) {
    this.navCtrl.push(ServicePage, { id: branche.id,name:branche.name });
    console.log("taped" + branche.id);

  }
  //***************** */

   presentToast() {
    let toast = this.toastCtrl.create({
    message: 'Problème de connexion',
  //  duration: 3000,
    position: 'bottom',
    showCloseButton:true,
    closeButtonText:"Ressayer"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
      this.getAgence();
      // this.common.test(this.getAgence())
    });

    toast.present();
  }


}
