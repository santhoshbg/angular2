import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { DepartmentListComponent } from './department-list.component';
import { DepartmentDetailComponent } from './department-detail.component';
import { MagentoListComponent } from './app.magentoApi-list.component';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { PostProfileServiceComponent } from './post-profileList.component';
import { CountriesListComponent } from './countries-list.service';


const routes: Routes = [
    // empty path for displaying the main page in Angular App Home page
    // { path: '', component: HomeComponent },
    // { path: '', redirectTO: '/departments', pathMatch: 'prefix' },
    // { path: '', redirectTO: '/departments', pathMatch: 'full' },
    // { path: '', component: HomeComponent },
    { path: '', component: DepartmentListComponent },
    { path: 'employeeDetails', component: EmployeeDetailComponent },
    { path: 'departments', component: DepartmentListComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'departments/:id', component: DepartmentDetailComponent },
    { path: 'magentoApiService', component: MagentoListComponent },
    { path: 'postprofileList', component: PostProfileServiceComponent },
    { path: 'countriesList', component: CountriesListComponent },
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
      ]
  })
  export class AppRoutingModule {}
  export const routingComponents = [HomeComponent, EmployeeDetailComponent, PageNotFoundComponent, DepartmentListComponent,
    EmployeeListComponent, DepartmentDetailComponent, MagentoListComponent, CountriesListComponent, PostProfileServiceComponent];

