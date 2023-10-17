import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-addsalesrep',
  templateUrl: './addsalesrep.component.html',
  styleUrls: ['./addsalesrep.component.css']
})
export class AddsalesrepComponent {
  name: string = "";
  gender: string = "";
  phoneNumber: string = "";
  password: string = "";

  constructor(private http: HttpClient){}

  save(){
    let bodyData = {
      "name" : this.name,
      "gender": this.gender,
      "phoneNumber": this.phoneNumber,
      "password": this.password
    };
    this.http.post("http://localhost:8080/api/salesRep/save",bodyData,{responseType: 'text'}).subscribe((responseData: any)=>
  {
    console.log(responseData);
    alert("Sales Rep registered successfully");
  });
  }
}

