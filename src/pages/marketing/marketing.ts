import { Common } from './../../providers/common';
import { Youtube } from './../../providers/youtube';
import { DomSanitizer } from '@angular/platform-browser';
import { MarketingEntitie } from './../../app/entitie/marketingEntite';
import { Restservice } from './../../providers/restservice';
import { GlobalVars } from './../../providers/global';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
//import {ServicesPage}  from'../services/services'
//import {ListagencePage}  from'../listagence/listagence'


@Component({
  selector: 'page-marketing',
  templateUrl: 'marketing.html',
})
export class MarketingPage {
  Marckic: MarketingEntitie[];
  client?: string;
  playList: any;
  videoUrl: any;
  datas: any;
  nextPageToken: any;

  constructor(public navCtrl: NavController, private restservice: Restservice,
    private domSanitizer: DomSanitizer,
    private yt: Youtube,
    private common: Common) {
    this.client = GlobalVars.getClient()
    this.common.presentLoadingDefault();
    yt.playlistList("PLLwZC97hfDt5aOYdTBFMANA3eu9ZVJJ6A").then(data => {
      this.datas = data.items;
      console.log
      if (data.nextPageToken) {
        this.nextPageToken = data.nextPageToken;
      }
      this.common.loadingfinish();
    })
    /*   this.playList = [
        {
          id: "",
          description: "Ces outils suivent l’évolution de vos fichiers <br> source et gardent les anciennes versions de chacun d’eux.",
          urlVideo: "https://www.youtube.com/embed/_UM3I4lY448",
          urlImg: 'assets/img/crs1.png'
        },
        {
          id: "",
          description: "Cours informatique débutant - Partie 2 - Le menu demarrer ",
          urlVideo: "https://www.youtube.com/embed/qOnyzImxBDw",
          urlImg: 'assets/img/nin-live.png'
        },
        {
          id: "Cours informatique débutant",
          description: "Cours informatique débutant",
          urlVideo: "https://www.youtube.com/embed/zZv1wi9RRoU",
          urlImg: ''
        }
      ] */
  }
  ngOnInit() {
    console.log('cool ')
    // this.getMarketic();
  }
  getMarketic() {
    console.log("point 2");
    this.restservice.getAllbranches().subscribe(Marckic => {

      console.log('data ' + Marckic)
        //Marckic= this.Marckic=Marckic;
        // var a=data.results
        //   console.log("resultat"+Marckic.url)
        , error => alert(error + 'erreur')
    })
  }
  infiniteScrool(ev) {
    if (this.nextPageToken) {
      this.yt.playlistList_page("PLLwZC97hfDt5aOYdTBFMANA3eu9ZVJJ6A", this.nextPageToken).then(data => {
        for (let i of data.items) {
          this.datas.push(i);
        }
        if (!data.nextPageToken) {
          this.nextPageToken = null;
        } else {
          this.nextPageToken = data.nextPageToken;
        }
        ev.complete();
      });
    } else {
      ev.complete();
    }
  }
}
