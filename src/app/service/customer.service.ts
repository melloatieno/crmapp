import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CustomResponse } from "../interface/custom-response";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { Customer } from "../interface/customer";
import { CustomerStatus } from "../enum/customerstatus.enum";

@Injectable({ providedIn: 'root' })
export class CustomerService {
    private readonly apiUrl = 'http://localhost:8080';
    
    constructor(private http: HttpClient) {}

    // public getCustomers(){
    //     return this.http.get(this.apiUrl + '/api/customer/list')
    // }

    customers$ = <Observable<CustomResponse>>
        this.http.get<CustomResponse>(`${this.apiUrl}/api/customer/list`)
            .pipe(
                tap(response => {
                    console.log("Fetched customer data:", response);
                }),
                catchError(this.handleError)
            );
    
    save$ = (customer: Customer) => <Observable<CustomResponse>>
        this.http.post<CustomResponse>(`${this.apiUrl}/api/customer/save`, customer)
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );

    filter$ = (status, response: CustomResponse) => <Observable<CustomResponse>>
        new Observable<CustomResponse>(
            subscriber => {
            subscriber.next(
                status === CustomerStatus.ALL ? { ...response, 
                    message: `Customers filtered by ${status} status` } :
                {
                    ...response,
                    message: response.data.customers
                        .filter(customer => customer.status == status).length > 0 ? `Customers filtered by ${status} status` 
                        : `No ${status} found`,
                    data: { customers: response.data.customers.filter(customer => customer.status === status) }
                }
            );
            subscriber.complete();
        })
        .pipe(
            tap(console.log),
            catchError(this.handleError)
        ); 

    delete$ = (customerId: number) => <Observable<CustomResponse>>
        this.http.delete<CustomResponse>(`${this.apiUrl}/api/customer/delete/${customerId}`)
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );

    private handleError(error: HttpErrorResponse): Observable<never> {
        console.log(error);
        return throwError(`An error occurred - Error code: ${error.status}`);
    }
}
