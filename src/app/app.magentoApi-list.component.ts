import { Component, OnInit } from '@angular/core';
import { MagentoApiService } from './app.magentoApiService';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
    selector: 'app-employee-list',
    templateUrl: './magento-productList.html',
    styleUrls: ['./styles.css']
    // template: ` <h2> {{ magentoPostService }} </h2>
    //             <h3> {{ errorMsg }} </h3>
    //             <h3> <span> Key : {{ loginKey }} </span> </h3>
    //             <ul *ngFor="let item of items.items">
    //             <li> <span> ID:{{ item.id }} </span> </li>
    //             <li> <span> name:{{ item.name }} </span> </li>
    //             <li> <span> price:{{ item.price }} </span> </li>
    //             <li> <span> type_id:{{ item.type_id }} </span> </li>
    //             </ul>
    //             `
})

export class MagentoListComponent implements OnInit {
    public magentoPostService = 'Magento Post Service';
    items = '';
    productValues = '' ;
    loginKey = '';
    errorMsg: string;
    constructor(private _employeeService: MagentoApiService) {}
    ngOnInit() {
        this._employeeService.login()
        .subscribe(tokendata => this.loginKey = tokendata);
        // alert('from component' + this.loginKey); santhu

        this._employeeService.products(Cookie.get('token'))
             .subscribe(resEmployeeData => this.items = resEmployeeData,
                 resEmployeeError => this.errorMsg = resEmployeeError);
                //  alert('key end' + this.items); santhu
    }
}
