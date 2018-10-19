import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  
  getResponse(accountId, comapnyID, svAccountId){   

    return this.http.get('./assets/data/productData.json')
    .catch(e => Observable.of({ failure: e }));
  }
}
