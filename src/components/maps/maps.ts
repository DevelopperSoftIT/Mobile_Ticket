import { Component } from '@angular/core';

/**
 * Generated class for the MapsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
// declare var google;

@Component({
  selector: 'maps',
  templateUrl: 'maps.html'
})
export class MapsComponent {

 map: any;
  start = 'chicago, il';
  end = 'chicago, il';
  lat: number = 51.678418;
  lng: number = 7.809007;
 /*  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
 */
  constructor() {
    console.log('Hello MapsComponent Component');
    //this.text = 'Hello World';

    // google.maps.event.addDomListener(window, "load", this.loadMap());
  }
/*  loadMap(){
    console.log('load map ')
   var latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      // mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

  }
  initMap(){
      var latlng = new google.maps.LatLng(39.305, -76.617);
      this.map = new google.maps.Map(document.getElementById('map'), {
      center: latlng,
      zoom: 12
    });

  } */
}
