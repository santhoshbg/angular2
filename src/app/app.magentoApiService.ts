import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { BookData } from './app.book';
// import { IProduct } from './IProduct';
import { Headers, RequestOptions } from '@angular/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';


@Injectable()
export class MagentoApiService {
    items = '';
    loginKey = '';
    errorMsg: string;
    private url = '/magento2/index.php/rest/V1/integration/admin/token';
    private productUrl = '/magento2/index.php/rest/V1/products/?searchCriteria=';
    //  private _url: string = 'https://api.myjson.com/bins/8uu4j';
     // private _url: string = 'http://localhost/magento2/index.php/rest/V1/integration/admin/token';
     constructor(private _http: Http) {}
     login() {

      let headers = new Headers( {'cache-control': 'no-cache', 'Content-Type': 'application/json'
      });
            let options = new RequestOptions({ headers: headers });
            return this._http.post(this.url ,
             JSON.stringify({ username: 'admin', password: '@valtech123',
            }), options)
        .map((response: Response) => {
            // Request successful if there's a Magento token in the response
             response.json();
            //  alert('login response' + response.json());
             Cookie.set('token', response.json(), 1);
            // if (user && user.token) {
            //     // store user details and jwt token in local storage to keep user logged in between page refreshes
            //     localStorage.setItem('currentUser', JSON.stringify(user));
            // }
            // this.products(response.json())
            // .subscribe(resEmployeeData => this.items = resEmployeeData,
            //     resEmployeeError => this.errorMsg = resEmployeeError);
            //     alert('key end' + response.json());
                return response.json();
        })
        .catch(this._errorHandler);
         }
     _errorHandler(error: Response) {
         console.log(error);
         return Observable.throw(error || 'Server Error');
     }

     products(user) {
        let token = 'Bearer ' + user;
        // alert('inside' + token);
        let params = new URLSearchParams();
        params.set('searchCriteria', '');
              let headers = new Headers( {'cache-control': 'no-cache', 'Content-Type': 'application/json' ,
                'Authorization': token });
                    let options = new RequestOptions({ headers: headers });
                    return this._http.get(this.productUrl, options)
                .map((responseNew: Response) => {
                    // Request successful response  from Magento token in the response
                     let items = responseNew.json();

                // alert('lenght count' + items.total_count);
                // alert('image value ' + items.items[0].custom_attributes[4].value);
                    return items;
                });
             }
}
