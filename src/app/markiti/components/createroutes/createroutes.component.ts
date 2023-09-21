
import { Component, ElementRef, EventEmitter, Input, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-createroutes',
  templateUrl: './createroutes.component.html',
  styleUrls: ['./createroutes.component.css']
})
export class CreateroutesComponent {

  fromDestination: any;
  toDestination: any;
  isStopover:boolean = false;
  waypoint:any;

  waypointArr:any[]=[];
  waypointsDisplayed:any[]=[];

  addWaypoint(){
    let data = {
      location: this.waypoint?.location,
      stopover: this.isStopover,
    };


    let dataDisplayed = {
      address: this.waypoint?.address,
      stopover: this.isStopover,
    };


    this.waypointArr = [...this.waypointArr, data];
    this.waypointsDisplayed.push(dataDisplayed)
  }

  // apiLoaded: Observable<boolean>;
  // @ViewChild('inputField')
  // public inputField!: ElementRef;
  // @ViewChild(GoogleMap)
  // public map!: GoogleMap;

  // @Input() placeholder = '';

  // zoom = 12;
  // center!: google.maps.LatLngLiteral;
  // options: google.maps.MapOptions = {
  //   zoomControl: true, 
  //   scrollwheel: false,
  //   disableDefaultUI: true,
  //   fullscreenControl: true,
  //   disableDoubleClickZoom: true,
  //   mapTypeId: 'hybrid',
  //   center: { lat: 0, lng: 0 }, // Initial center
  //   zoom: 12, 
  // }
  // latitude!: any;
  // longitude!: any;


  // mapCenter: google.maps.LatLngLiteral = { lat: 0, lng: 0 }; // Initial map center
  // markerPosition: google.maps.LatLngLiteral = { lat: 0, lng: 0 }; // Marker position
  
  // constructor(private ngZone: NgZone, private httpClient: HttpClient){
  //   this.apiLoaded = this.loadGoogleMapsAPI();     
  //  }

  //  private loadGoogleMapsAPI(): Observable<boolean> {
  //   const apiKey = 'AIzaSyCtrn_SFi73C7VJbx6t1utKdiYLUjRMpS0';
  
  //   // Use the JSONP request to load the Google Maps API
  //   return this.httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`, 'callback')
  //     .pipe(
  //       map(() => true),
  //       catchError(() => of(false))
  //     );
  // }

  //  ngAfterViewInit(): void {
  //   let autocomplete = new google.maps.places.Autocomplete(this.inputField.nativeElement);

  //   autocomplete.addListener('place_changed', () => {
  //     this.ngZone.run(() => {
  //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();

  //       if (place.geometry === undefined || place.geometry === null) {
  //         return
  //       }

  //       console.log({ place }, place.geometry.location?.lat());

  //       this.latitude = place.geometry.location?.lat();
  //       this.longitude = place.geometry.location?.lng();
  //       this.center = {
  //         lat: this.latitude,
  //         lng: this.longitude,
  //       };
  //     });
  //   });
  // }


  // onMapClick(event: google.maps.MapMouseEvent) {
  //   this.markerPosition = event.latLng.toJSON();
  // }

  // ngOnInit() {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     this.center = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude,
  //     };
  //   });
  // }
}



export interface PlaceSearchResult {
  address: string;
  location?: google.maps.LatLng;
  name?: string;
}