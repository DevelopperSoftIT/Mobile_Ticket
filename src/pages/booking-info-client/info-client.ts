import { Common } from './../../providers/common';
import { Restservice } from './../../providers/restservice';
import { GlobalVars } from './../../providers/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResumeBookPage } from "../booking-resume/resume-book";

@Component({
  selector: 'page-info-client',
  templateUrl: 'info-client.html',
})
export class InfoClientPage {
    client?:string;
    seldate: any;
    times: any;
    idService: any;
    idBranch: any;
    branch: any;
    service: any;
    brancheName: string;
    serviceName: string;
    iserror: boolean;
    clientData = {
      notes:'',
      title: '',
      customer : {
        firstName :'',
        lastName :'',
        email :'',
        phone : '',
      }
    }
   // private clientData : FormGroup;
  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     private common:Common,
     private restservice: Restservice,
) {
        this.client=GlobalVars.getClient()
        this.branch=navParams.get('branch');
        this.service=navParams.get('service');
        this.seldate=navParams.get('dates');
        this.times=navParams.get('times');
        this.idBranch=this.branch.publicId;
        this.idService=this.service.publicId;
        this.brancheName = this.branch.name;
        this.serviceName = this.service.name;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoClientPage');
  }

  booking(form){
    console.log(form)
    this.clientData={
      notes : form.value.notes,
      title: form.value.title,
      customer :{
        firstName : form.value.firstName,
        lastName : form.value.lastName,
        email : form.value.email,
        phone : form.value.phone

      }
    };
    console.log(this.clientData)
    this.sendBook(this.clientData);


  }

  sendBook(data){
      this.common.presentLoadingDefault
      console.log("Showticket.getvisit :");
      this.restservice.postBook( this.idBranch, this.idService, this.seldate, this.times, data).subscribe(res=> {
      // var a=data.results
      // setInterval(console.log(this.loading), 5000);
      this.iserror=false;
      this.common.loadingfinish();
      // this.common.toastInfo(this.common.getTranslate("Showticketpage.note"));
      console.log(res)
       this.navCtrl.setRoot(ResumeBookPage,{res: res})
    },
    error => {
      this.common.loadingfinish();
      this.iserror=true;
      this.common.toastErrorRetry(()=>{this.sendBook(data)})
      // alert(error + 'erreur')
    }
    )
  }

}
