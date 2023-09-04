import { Component, OnInit } from '@angular/core';
import { Customer } from '../interface/customer';
import { CustomerService } from '../service/customer.service';
import { CustomResponse } from '../interface/custom-response';
import { Observable } from 'rxjs';
import { AppState } from '../interface/app.state';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit{
  appState$: Observable<AppState<CustomResponse>>;
  customers: Customer[] = [];
  DataState: any;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.customers$().subscribe(
      (response) => {
        this.customers = response.data.customers;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  openAddCustomerModal() {
    // Implement modal or form to add new customer
  }
}
