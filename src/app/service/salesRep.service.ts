import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CustomResponse } from "../interface/custom-response";
import { Observable, catchError, tap, throwError } from "rxjs";
import { SalesRep } from "../interface/salesRep";

@Injectable({
    providedIn: 'root'
})
export class salesRepService {
    private readonly apiUrl = 'http://localhost:8080';
    
    constructor(private http: HttpClient) {}

    salesReps$ = <Observable<CustomResponse>>
        this.http.get<CustomResponse>(`${this.apiUrl}/api/salesRep/list`)
            .pipe(
                tap(response => {
                    console.log("Fetched customer data:", response);
                }),
                catchError(this.handleError)
            );

    savecustomer(salesrep: SalesRep): Observable<any> {
        return this.http.post <any> (`${this.apiUrl}/api/salesRep/save`, salesrep, {observe:'response'});
    }

    
    private handleError(error: HttpErrorResponse): Observable<never> {
        console.log(error);
        return throwError(`An error occurred - Error code: ${error.status}`);
    }
}