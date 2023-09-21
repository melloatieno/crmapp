import { Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-place-search',
  templateUrl: './place-search.component.html',
  styleUrls: ['./place-search.component.css']
})
export class PlaceSearchComponent {

  @ViewChild('inputField') inputField!: ElementRef;

  @Input() placeholder = '';
  @Input() labelName = '';
  @Output() placeChanged = new  EventEmitter<any>();

  autocomplete: google.maps.places.Autocomplete | undefined;

  constructor(private ngZone: NgZone) { }

  ngAfterViewInit():void {
    this.autocomplete = new google.maps.places.Autocomplete(this.inputField.nativeElement);

    this.autocomplete.addListener('place_changed', ()=> {
      const place = this.autocomplete?.getPlace();
      const result: PlaceSearchResult = {
        address: this.inputField.nativeElement.value,
        name: place?.name,
        location: place?.geometry?.location,
      }

      this.ngZone.run (()=> {
        this.placeChanged.emit(result);
      });
    })
  }
  

}


export interface PlaceSearchResult {
  address: string;
  location?: google.maps.LatLng;
  name?: string;
}