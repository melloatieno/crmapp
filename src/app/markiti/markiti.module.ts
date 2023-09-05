import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ViewcontactsComponent } from './components/viewcontacts/viewcontacts.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule  } from '@angular/forms';
import { CreateroutesComponent } from './components/createroutes/createroutes.component';
import { RoutescontentComponent } from './component/routescontent/routescontent.component';
import { RegionsComponent } from './components/regions/regions.component';
import { RoutestableComponent } from './components/routestable/routestable.component';

@NgModule({
  declarations: [
    ViewcontactsComponent,
    CreateroutesComponent,
    RoutescontentComponent,
    RegionsComponent,
    RoutestableComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatTableModule,
    MatToolbarModule,
    FormsModule
  ]
})
export class MarkitiModule { }