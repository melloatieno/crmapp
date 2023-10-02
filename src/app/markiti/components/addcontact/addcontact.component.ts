import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, Observable, catchError, map, of, startWith } from 'rxjs';
import { CustomerStatus } from 'src/app/enum/customerstatus.enum';
import { AppState } from 'src/app/interface/app.state';
import { CustomResponse } from 'src/app/interface/custom-response';
import { DataState } from 'src/app/enum/data.state.enum';
import { CustomerService } from 'src/app/service/customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
  appState$: Observable<AppState<CustomResponse>>;
  readonly DataState = DataState;
  readonly CustomerStatus = CustomerStatus;
  private filterSubject = new BehaviorSubject<string>('');
  private dataSubject = new  BehaviorSubject<CustomResponse>(null);
  filterStatus$ = this.filterSubject.asObservable();
  private isLoading = new  BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();
  
  constructor(
    private customerService: CustomerService,
    private ref:MatDialogRef<AddcontactComponent>, 
    ){

  }
  ngOnInit(): void {
    this.appState$ = this.customerService.customers$
    .pipe(
      map(response => {
        this.dataSubject.next(response);
        return { dataState: DataState.LOADED_STATE, appData: response}
      }),
      startWith({dataState: DataState.LOADING_STATE}),
      catchError((error: string) =>{
        return of({dataState: DataState.ERROR_STATE, error});
      })
    );
  }
  closepopup(){
    this.ref.close();
  }

  // saveCustomer(customerForm: NgForm): void {
  //   this.isLoading.next(true);
  //   this.appState$ = this.customerService.save$(customerForm.value as Customer)
  //   .pipe(
  //     map(response => {
  //       this.dataSubject.next({
  //         ...response, data: { customers: [response.data.customer, ...this.dataSubject.value.data.customers]}
  //       });
  //       document.getElementById('closeModal').click();
  //       this.isLoading.next(false);
  //       customerForm.resetForm({ status: this.CustomerStatus.LEAD});
  //       return { dataState: DataState.LOADED_STATE, appData: this.dataSubject.value}
  //     }),
  //     startWith({dataState: DataState.LOADED_STATE, appData: this.dataSubject.value}),
  //     catchError((error: string) =>{
  //       this.isLoading.next(false);
  //       return of({dataState: DataState.ERROR_STATE, error});
  //     })
  //   );
  // }

  saveCustomer(customerForm: NgForm): void{
    console.log(customerForm.value);
    this.customerService.savecustomer(customerForm.value).subscribe({
      next: (response: any) => { 
        console.log(response);
      }
    })
  }

  challengesarray=['Storage','Capital','Quality','Inconsistent Supply']
  categoryarray=['Family','MicroEnterprise','SmallEnterprise','MediumEnterprise','LargeEnterprise']
  optionarray=['YES','NO']
  genderarray=['Male','Female'] 
  customerstatusarray=['LEAD','PROSPECT','CUSTOMER']

  // SaveCustomer(){
  //   console.log(this.customerform.value);
  //   this.customerform.reset();
  // }
}
