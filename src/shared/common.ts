import { TranslateService } from '@ngx-translate/core';
import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular/components/toast/toast';


@Injectable()
export class Common{
  /**
   *
   */

  loading: any;
  messageLoading:string="Chargement en cours";
  tc:any;
  /**
   *
   * @param toastCtrl
   * @param loadingCtrl
   * @param translate
   */
  constructor(private toastCtrl: ToastController,public loadingCtrl: LoadingController,public translate: TranslateService) {
    this.chargeTranslate();

  }
/**
 *
 * @param msg
 */
  //Affichier le toast
  public  presentToast(msg) {

  let toast = this.toastCtrl.create({
    message: msg,
     duration: 3000,
    position: 'bottom'

   });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });
  toast.present();
}
/**
 * Default loading
 */
 public presentLoadingDefault() {
    console.log("Common.presentLoadingDefault: ")
    this.loading = this.loadingCtrl.create({
      content: this.getTranslate("Loading.messageContent")
    });
    this.loading.present();
  }

  loadingfinish() {
    console.log(" Common.loadingfinish: ")
    setTimeout(() => {
      this.loading.dismiss();
    }, 100);
  }

  /**
   * toast simple
   * @param msg
   * @param duration
   * @param position
   * @param showbutton
   * @param methode
   */
  toast(msg, duration = 30000, position = 'middile', showbutton = false,buttonMessage=this.getTranslate("Error.buttonCloseToast")){
    console.log("Common.toast: durre " +duration)
    let toast = this.toastCtrl.create({
      message: msg,
      duration: duration,
      position: position,
      showCloseButton:showbutton,
      closeButtonText:buttonMessage
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

  // toastError(methode?:any) {
  //   console.log("Common.toastError: "+methode)
  //   this.toast( 'Problème de connexion',10000,'bottom', true,'Réessayer');
  // }

  /**
   * toast info
   * @param msg
   * @param duration
   * @param position
   * @param showbutton
   */
  toastInfo(msg, duration = 5000, position = 'middle', showbutton = true) {
    this.toast(msg, duration, position, showbutton);
  }
/**
 * toast error  and try
 * @param callback
 */

  toastErrorRetry(callback: () => void/*,iscallback=true*/) {
     this.tc = this.toastCtrl.create({
    message: this.getTranslate("Error.errorMessage"),
    //  duration: 3000,
    position: 'bottom',
    showCloseButton:true,
    cssClass:"toast-error",
    closeButtonText:this.getTranslate("Error.buttonTryToast"),
     dismissOnPageChange:true
    });

     this.tc.onDidDismiss((data, role) => {
        console.log('toastErrorRetry - onDidDismiss begin');
        // console.log(data);
        // console.log(role);
        if (role== "close") {
          callback();
        }
        console.log('toastErrorRetry - onDidDismiss end')
    });

     this.tc.present();
  }
  destoryToast(){
    console.log('destoryToast');
    // this.tc.dismiss();
    this.tc.onDidDismiss(() => {
      console.log('toastErrorRetry - onDidDismiss');

    });
  }

/**
 * charger la translation
 */
 chargeTranslate() {
    // this.titlenotif = this.getTranslante('Showticketpage.dialog.titleTicketCall');
    // this.titlecancel =  this.getTranslante('Dialogue.titlecancel');
      this.translate.get('Loading.message').subscribe((res: string) => {
      this.messageLoading = res;
    });
  }
  /**
   *
   * @param msgtots message to translate
   */
  getTranslate(msgtots):string{
    var ts;
    this.translate.get(msgtots).subscribe((res: string) => {
      ts = res;
    });
    return ts;
  }

}

