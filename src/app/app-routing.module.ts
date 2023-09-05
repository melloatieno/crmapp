import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { DefaultComponent } from './layout/default/default.component';
import { PostsComponent } from './modules/posts/posts.component';
import { MarkitilandingComponent } from './markiti/components/markitilanding/markitilanding.component';
import { ViewcontactsComponent } from './markiti/components/viewcontacts/viewcontacts.component';
import { CustomerlistComponent } from './markiti/components/customerlist/customerlist.component';
import { LeadqualificationComponent } from './markiti/components/leadqualification/leadqualification.component';
import { RoutesComponent } from './markiti/components/routes/routes.component';
import { CreateroutesComponent } from './markiti/components/createroutes/createroutes.component';
import { RoutescontentComponent } from './markiti/components/routescontent/routescontent.component';
import { RegionsComponent } from './markiti/components/regions/regions.component';
import { RoutestableComponent } from './markiti/components/routestable/routestable.component';



const routes: Routes = [{
  path: '',
  component:DefaultComponent,
  children: [{
    path: 'dashboard',
    component:DashboardComponent
  },{
    path: 'posts',
    component: PostsComponent
  },{
    path: 'markitilanding', 
    component: MarkitilandingComponent
  },{
    path: 'viewcontacts',
    component: ViewcontactsComponent
  },{
    path: 'customerlist',
    component: CustomerlistComponent
  },{
    path: 'leadqualification',
    component: LeadqualificationComponent
  },{
    path: 'routes',
    component: RoutesComponent
  },{
    path: 'routescontent',
    component: RoutescontentComponent
  },{
    path: 'regions',
    component: RegionsComponent
  },{
    path: 'routestable',
    component: RoutestableComponent
  },{
    path: 'createroutes',
    component: CreateroutesComponent
  }
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
