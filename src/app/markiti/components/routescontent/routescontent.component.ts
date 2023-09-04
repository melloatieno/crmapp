import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, catchError, map, of, startWith } from 'rxjs';
import { Category } from 'src/app/enum/category.enum';
import { Challenges } from 'src/app/enum/challenges.enum';
import { Chama } from 'src/app/enum/chama.enum';
import { CustomerStatus } from 'src/app/enum/customerstatus.enum';
import { Freezer } from 'src/app/enum/freezer.enum';
import { Gender } from 'src/app/enum/gender.enum';
import { AppState } from 'src/app/interface/app.state';
import { CustomResponse } from 'src/app/interface/custom-response';
import { AddcontactComponent } from '../addcontact/addcontact.component';
import { DataState } from 'src/app/enum/data.state.enum';
import { CustomerService } from 'src/app/service/customer.service';


export class Customer {
  constructor(
    public id: number,
    public name: string,
    public contactPerson: string,
    public phoneNumber: string,
    public gender: Gender,
    public latitude: number,
    public longitude: number,
    public chama: Chama,
    public challenges: Challenges,
    public category: Category,
    public supplier: string,
    public products: string,
    public weight: number,
    public freezer: Freezer,
    public status: CustomerStatus
){

} 
}

@Component({
  selector: 'app-routescontent',
  templateUrl: './routescontent.component.html',
  styleUrls: ['./routescontent.component.css']
})

export class RoutescontentComponent implements OnInit {
  appState$: Observable<AppState<CustomResponse>>;
  readonly DataState = DataState;
  readonly CustomerStatus = CustomerStatus;
  private filterSubject = new BehaviorSubject<string>('');
  private dataSubject = new  BehaviorSubject<CustomResponse>(null);
  filterStatus$ = this.filterSubject.asObservable();

  constructor(private customerService: CustomerService,
    private dialog:MatDialog){}

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
  
  filterCustomers(status: any): void {
    this.appState$ = this.customerService.filter$(status.value.toString(), this.dataSubject.value)
    .pipe(
      map(response => {
        return { dataState: DataState.LOADED_STATE, appData: response}
      }),
      startWith({dataState: DataState.LOADED_STATE, appData: this.dataSubject.value}),
      catchError((error: string) =>{
        return of({dataState: DataState.ERROR_STATE, error});
      })
    );
  }

  Openaddcontact(){
    this.dialog.open(AddcontactComponent,{
      width: '60%',
      height: '650px',
    })
  }
}
