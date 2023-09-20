import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { BehaviorSubject, Observable, catchError, map, of, startWith } from 'rxjs';
import { CustomerStatus } from 'src/app/enum/customerstatus.enum';
import { DataState } from 'src/app/enum/data.state.enum';
import { AppState } from 'src/app/interface/app.state';
import { CustomResponse } from 'src/app/interface/custom-response';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-leadqualification',
  templateUrl: './leadqualification.component.html',
  styleUrls: ['./leadqualification.component.css']
})
export class LeadqualificationComponent {
  lead = 0;
  prospect = 0;
  customer = 0;

  constructor(private customerService: CustomerService){}

  ngOnInit(): void {

    this.countCustomerByLead();
    this.countCustomerByProspect();
    this.countCustomerByCustomer();

    // this.appState$ = this.customerService.customers$
    // .pipe(
    //   map(response => {
    //     this.dataSubject.next(response);
    //     return { dataState: DataState.LOADED_STATE, appData: response}
    //   }),
    //   startWith({dataState: DataState.LOADING_STATE}),
    //   catchError((error: string) =>{
    //     return of({dataState: DataState.ERROR_STATE, error});
    //   })
    // );
  }

  countCustomerByLead(): void {
    this.customerService.countCustomerByStatus("LEAD").subscribe({
      next: (response) => {
        this.lead = response.body.count;
      }
    })
  }

  countCustomerByProspect(): void {
    this.customerService.countCustomerByStatus("PROSPECT").subscribe({
      next: (response) => {
        this.prospect = response.body.count;
      }
    })
  }

  countCustomerByCustomer(): void {
    this.customerService.countCustomerByStatus("CUSTOMER").subscribe({
      next: (response) => {
        this.customer = response.body.count;
      }
    })
  }
  // filterCustomers(status: any): void {
  //   this.appState$ = this.customerService.filter$(status.value.toString(), this.dataSubject.value)
  //   .pipe(
  //     map(response => {
  //       return { dataState: DataState.LOADED_STATE, appData: response}
  //     }),
  //     startWith({dataState: DataState.LOADED_STATE, appData: this.dataSubject.value}),
  //     catchError((error: string) =>{
  //       return of({dataState: DataState.ERROR_STATE, error});
  //     })
  //   );
  // }


}
