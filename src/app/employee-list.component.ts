import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

// @Component({
//     selector: 'app-employee-list',
//     template: ` <h2> {{ titleOfEmployeeName }} </h2>
//                 <h3> {{ errorMsg }} </h3>
//                 <ul *ngFor="let employee of employees">
//                      <li> {{ employee.name }}</li>
//                     <li> {{ employee.id }}</li>
//                 </ul>`
// })
@Component({
    selector: 'app-employee-list',
    template: ` <h2> {{ titleOfEmployeeName }} </h2>
                <h3> {{ errorMsg }} </h3>
                <ul *ngFor="let employee of employees">
                     <li> User ID : <span> {{ employee.userId }} </span> </li>
                     <li> ID : <span> {{ employee.id }} </span> </li>
                     <li> Title : <span> {{ employee.title }} </span> </li>
                     <li> Body : <span> {{ employee.body }} </span> </li>
                </ul>`
})

export class EmployeeListComponent implements OnInit {
    public titleOfEmployeeName = 'Employee Names';
    employees = [];
    errorMsg: string;
    constructor(private _employeeService: EmployeeService) {}
    ngOnInit() {
         this._employeeService.getEmployees()
         .subscribe(resEmployeeData => this.employees = resEmployeeData,
            resEmployeeError => this.errorMsg = resEmployeeError);
    }

}
