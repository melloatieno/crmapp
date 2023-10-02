import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { DataState } from 'src/app/enum/data.state.enum';
import { AppState } from 'src/app/interface/app.state';
import { CustomResponse } from 'src/app/interface/custom-response';
import { RoutesService } from 'src/app/service/routes.service';

@Component({
  selector: 'app-routestable',
  templateUrl: './routestable.component.html',
  styleUrls: ['./routestable.component.css']
})
export class RoutestableComponent implements OnInit {
  appState$: Observable<AppState<CustomResponse>>;
  readonly DataState = DataState;
  constructor(private routesService: RoutesService){}

  ngOnInit(): void {
    this.appState$ = this.routesService.routers$
    .pipe(
      map(response =>{
        return { dataState: DataState.LOADED_STATE, appData: response}
      }),
      startWith({ dataState: DataState.LOADING_STATE }),
      catchError((error: string) => {
        return of ({ dataState: DataState.ERROR_STATE, error: error })
      })
    );
  }
}
