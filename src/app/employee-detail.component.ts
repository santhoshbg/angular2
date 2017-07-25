import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

// @Component({
//     selector: 'app-employee-detail',
//     template: ` <h2> {{ titleOfEmployeeDetails }} </h2>
//                 <h3> {{ errorMsg }} </h3>
//                 <ul *ngFor="let employee of employees">
//                 <li>Name:  {{ employee.name }}</li>
//                 <li>ID:  {{ employee.id }}</li>
//                 <li>Email : {{ employee.email }} </li>
//                 <li>Address:   {{ employee.address }}</li>
//                 <li>Gender:  {{ employee.gender }}</li>
//                 </ul>`
// })

@Component({
    selector: 'app-employee-detail',
    template: ` <h2> {{ titleOfEmployeeDetails }} </h2>
                <h3> {{ errorMsg }} </h3>
                <ul *ngFor="let employee of employees">
                     <li> User ID : <span> {{ employee.userId }} </span> </li>
                     <li> ID : <span> {{ employee.id }} </span> </li>
                     <li> Title : <span> {{ employee.title }} </span> </li>
                     <li> Body : <span> {{ employee.body }} </span> </li>
                </ul>`
})

export class EmployeeDetailComponent implements OnInit {
    public titleOfEmployeeDetails = 'Employee Details';
    employees = [];
    errorMsg: string;
    constructor(private _employeeService: EmployeeService) {}
    ngOnInit() {
         this._employeeService.getEmployees()
         .subscribe(resEmployeeData => this.employees = resEmployeeData,
            resEmployeeError => this.errorMsg = resEmployeeError);
    }
}
