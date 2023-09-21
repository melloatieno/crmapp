
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

    this.waypoint = undefined;
    this.isStopover = false;
  }

}



export interface PlaceSearchResult {
  address: string;
  location?: google.maps.LatLng;
  name?: string;
}