import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DefaultModule } from './layout/default/default.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddcontactComponent } from './markiti/components/addcontact/addcontact.component';
import {MatInputModule} from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CustomerlistComponent } from './markiti/components/customerlist/customerlist.component';
import { MarkitilandingComponent } from './markiti/components/markitilanding/markitilanding.component';
import { ViewcontactsComponent } from './markiti/components/viewcontacts/viewcontacts.component';
import { LeadqualificationComponent } from './markiti/components/leadqualification/leadqualification.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { RoutesComponent } from './markiti/components/routes/routes.component';
import { CreateroutesComponent } from './markiti/components/createroutes/createroutes.component';
import { RoutescontentComponent } from './markiti/components/routescontent/routescontent.component';
import { RegionsComponent } from './markiti/components/regions/regions.component';
import { RoutestableComponent } from './markiti/components/routestable/routestable.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    MarkitilandingComponent,
    ViewcontactsComponent,
    AddcontactComponent,
    CustomerlistComponent,
    LeadqualificationComponent,
    RoutesComponent,
    CreateroutesComponent,
    RoutescontentComponent,
    RegionsComponent,
    RoutestableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DefaultModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    FormsModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
