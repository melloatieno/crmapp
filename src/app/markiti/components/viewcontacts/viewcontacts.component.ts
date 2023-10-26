import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddcontactComponent } from '../addcontact/addcontact.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-viewcontacts',
  templateUrl: './viewcontacts.component.html',
  styleUrls: ['./viewcontacts.component.css']
})
export class ViewcontactsComponent {
  // data: [][];
  constructor(private dialog:MatDialog){

  }

  Openaddcontact(){
    this.dialog.open(AddcontactComponent,{
      width: '60%',
      height: '680px',
    })
  }

  onFileChange(evt: any){
    const target : DataTransfer = <DataTransfer>(evt.target);

    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) =>{
      const bstr: string = e.target.result;
      let wb = XLSX.read(bstr, {type: 'binary'});
      wb.SheetNames.forEach(sheet => {
        const data = XLSX.utils.sheet_to_json(wb.Sheets[sheet]);
        console.log(data);
      })
      // const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary'});
      
      // const wsname : string = wb.SheetNames[0];

      // const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      // console.log(ws);

      // this.data = (XLSX.utils.sheet_to_json(ws, { header: 1}));
      // console.log(this.data);

    };
    reader.readAsBinaryString(target.files[0]);
  }
}
