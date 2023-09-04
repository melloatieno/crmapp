import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from './service/customer.service';
import { BehaviorSubject, Observable, catchError, map, of, startWith } from 'rxjs';
import { AppState } from './interface/app.state';
import { CustomResponse } from './interface/custom-response';
import { DataState } from './enum/data.state.enum';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  appState$: Observable<AppState<CustomResponse>>;
  readonly DataState = DataState;
  private filterSubject = new BehaviorSubject<string>('');
  private dataSubject = new  BehaviorSubject<CustomResponse>(null);
  filterStatus$ = this.filterSubject.asObservable();
  title = 'crmapp';

  constructor(private customerService: CustomerService){}


  ngOnInit(): void {
    this.appState$ = this.customerService.customers$
    .pipe(
      map(response => {
        return { dataState: DataState.LOADED_STATE, appData: response}
      }),
      startWith({dataState: DataState.LOADING_STATE}),
      catchError((error: string) =>{
        return of({dataState: DataState.ERROR_STATE, error:error})
      })
    );
  }

}
