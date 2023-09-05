
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-createroutes',
  templateUrl: './createroutes.component.html',
  styleUrls: ['./createroutes.component.css']
})
export class CreateroutesComponent implements OnInit {

  @ViewChild('inputField') 
  inputField!: ElementRef;

  @Input() placeholder = '';

  autocomplete: google.maps.places.Autocomplete | undefined;
  
  // constructor(){ }

  ngOnInit(): void{ }

  ngAfterViewInit() {

    this.autocomplete = new google.maps.places.Autocomplete(this.inputField.nativeElement);

    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete?.getPlace();
      console.log(place);
    })
  }
}
