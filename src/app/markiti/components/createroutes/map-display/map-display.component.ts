import { Component, Input, ViewChild } from '@angular/core';
import { PlaceSearchResult } from '../createroutes.component';
import { GoogleMap, MapDirectionsService } from '@angular/google-maps';
import { map } from 'rxjs';

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.css']
})
export class MapDisplayComponent {

  @ViewChild('map', {static: true}) map!: GoogleMap

  @Input() from : PlaceSearchResult | undefined;
  @Input() to : PlaceSearchResult | undefined;
  @Input() waypoints : any[] = [];

  zoom = 5;

  directionResult: google.maps.DirectionsResult | undefined;

  markerPosition: google.maps.LatLng | undefined;


  constructor(
    private mapDirectionsService: MapDirectionsService
  ) { }

  ngOnChanges(){
    const fromLocation = this.from?.location;
    const toLocation = this.to?.location;
    console.log(this.waypoints)

    if(fromLocation && toLocation){
      this.getDirections(fromLocation, toLocation);
    } else if(fromLocation) {
      this.goToLocation(fromLocation)
    } else if(toLocation) {
      this.goToLocation(toLocation);
    }
  }

  goToLocation(location: google.maps.LatLng){
    this.markerPosition = location;
    this.map.panTo(location)
    this.zoom = 17;
    this.directionResult = undefined;
  }

  getDirections(from: google.maps.LatLng, to: google.maps.LatLng){
    const request: google.maps.DirectionsRequest = {
      origin : from,
      destination: to,
      travelMode: google.maps.TravelMode.DRIVING,
      waypoints: this.waypoints ?? []
    }

    console.log(request);

    this.mapDirectionsService.route(request).pipe(
      map(res=>res.result)
    ).subscribe((result) => {
      this.directionResult = result;
      this.markerPosition = undefined;
    });
  }
}
