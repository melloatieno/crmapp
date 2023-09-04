import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddcontactComponent } from '../addcontact/addcontact.component';

@Component({
  selector: 'app-viewcontacts',
  templateUrl: './viewcontacts.component.html',
  styleUrls: ['./viewcontacts.component.css']
})
export class ViewcontactsComponent {
  constructor(private dialog:MatDialog){

  }

  Openaddcontact(){
    this.dialog.open(AddcontactComponent,{
      width: '60%',
      height: '680px',
    })
  }
}
