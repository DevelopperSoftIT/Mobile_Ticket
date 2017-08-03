import { GlobalVars } from './../../providers/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-resume-book',
  templateUrl: 'resume-book.html',
})
export class ResumeBookPage {
  client?:string;
  abstractBook: any;
  brancheName: string;
  serviceName: string;
  ref: string;
  phone: string;
  firstName: string;
  lastName: string;
  email: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.client=GlobalVars.getClient()
    this.abstractBook=navParams.get('res');
    this.brancheName= this.abstractBook.branch.name;
    this.serviceName= this.abstractBook.services[0].name;
    this.ref= this.abstractBook.created;
    this.firstName= this.abstractBook.customers[0].firstName;
    this.lastName= this.abstractBook.customers[0].lastName;
    this.phone= this.abstractBook.customers[0].phone;
    this.email= this.abstractBook.customers[0].email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResumeBookPage');
  }

}
