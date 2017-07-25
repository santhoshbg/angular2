import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { CountriesListComponent } from './countries-list.service';

@Injectable()
export class CountriesService {
     // private _url: string = 'https://api.myjson.com/bins/8uu4j';
     // private _url: string = 'https://restcountries.eu/rest/v2/name/india?fullText=true';
     private _url: string = 'https://restcountries.eu/rest/v2/name/china?fullText=true';
     // private _url: string = 'appdata/employeedata.json';
     constructor(private _http: Http) {}
     getCountries() {
         return this._http.get(this._url)
         .map((response: Response) => response.json())
         .catch(this._errorHandler);
     }
     _errorHandler(error: Response) {
         console.log(error);
         return Observable.throw(error || 'Server Error');
     }
}
