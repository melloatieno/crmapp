import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class LocationService {

    constructor(){}

    getLocation(): Promise<any>{
        return new Promise((resolve, reject) =>{
            navigator.geolocation.getCurrentPosition(resp =>{
                resolve({lng: resp.coords.longitude, lat: resp.coords.latitude})
            })
        })
    }

}
