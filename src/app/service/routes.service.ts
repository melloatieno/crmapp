import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomResponse } from '../interface/custom-response';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Routes } from '../interface/routes';

@Injectable({ providedIn: 'root' })
export class RoutesService {
  private readonly apiUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  routers$ = <Observable<CustomResponse>>
  this.http.get<CustomResponse>(`${this.apiUrl}/api/routes/list`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  saveRoutes(routes: Routes): Observable<any> {
    return this.http.post <any> (`${this.apiUrl}/api/routes/save`, routes, {observe:'response'});
  }

  delete$ = (id: number) => <Observable<CustomResponse>>
  this.http.delete<CustomResponse>(`${this.apiUrl}/api/routes/delete/${id}`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError (`An error occured - Error code: ${error.status}`);
  }
}
