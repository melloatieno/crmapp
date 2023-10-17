
import { Component } from '@angular/core';
import { RoutesService } from 'src/app/service/routes.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-createroutes',
  templateUrl: './createroutes.component.html',
  styleUrls: ['./createroutes.component.css']
})
export class CreateroutesComponent {

  constructor(private routesService: RoutesService ) {}

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

  saveRoutes(routesForm: NgForm): void{
    console.log(routesForm.value);
    this.routesService.saveRoutes(routesForm.value).subscribe({
      next: (response: any) => { 
        console.log(response);
      }
    })
  }
}



export interface PlaceSearchResult {
  address: string;
  location?: google.maps.LatLng;
  name?: string;
}