import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { PostProfileServiceComponent } from './post-profileList.component';

@Injectable()
export class PostProfileService {

    // private _url: string = 'https://restcountries.eu/rest/v2/name/ìndia?fullText=true';
     private _url: string = 'https://reqres.in/api/users';
    // private _url: string = '/magento2/index.php/rest/V1/products/?searchCriteria=';
    // private _url: string = '/magento2/index.php/rest/V1/integration/admin/token';
    // private _url: string = 'http://localhost/magento2/index.php/rest/V1/integration/admin/token';
    // private _url: string = 'appdata/employeedata.json';
    constructor(private _http: Http) {}
    saveProfile() {
        // return this._http.post(this._url, {name: 'santhosh', pass: 'abcd', city: 'bang'})
        return this._http.post(this._url, { username: 'admin', password: '@valtech123'})
        // JSON.stringify({ username: 'admin', password: '@valtech123',
        .map((response: Response) => response.json())
        .catch(this._errorHandler);
    }
    _errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error || 'Server Error');
    }
}

