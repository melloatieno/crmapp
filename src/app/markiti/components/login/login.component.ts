import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  phoneNumber: string = "";
  password: string = "";

  constructor(private router: Router, private http: HttpClient){}

  login(){
    console.log(this.phoneNumber);
    console.log(this.password);

    let bodyData = {
      "phoneNumber": this.phoneNumber,
      "password": this.password
    };
    this.http.post("http://localhost:8080/api/salesRep/login", bodyData).subscribe((responseData: any)=>
  {
    console.log(responseData);

    if(responseData.message == "Login Success")
    {
      alert("Login Successful");
      this.router.navigateByUrl('/markitilanding')
    } else
    if(responseData.message == "Login Failed - Incorrect Password")
    {
      alert("Incorrect Password");
    }
    else{
      alert("Phone Number does not exist");
    }
  });
  }
}
