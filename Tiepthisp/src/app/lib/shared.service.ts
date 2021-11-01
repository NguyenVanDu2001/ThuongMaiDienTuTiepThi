import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
//import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public host = environment.apiUrl;
  constructor(private _http: HttpClient, public router: Router) {}

  post(url: string, obj: any) {
    const body = JSON.stringify(obj);
    // let cloneHeader: any = {};
    // cloneHeader['Content-Type'] = 'application/json';
    // const headerOptions = new HttpHeaders(cloneHeader);
    return this._http
      .post<any>(this.host + url, body)
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  get(url: string) {
    // let cloneHeader: any = {};
    // cloneHeader['Content-Type'] = 'application/json';
    // const headerOptions = new HttpHeaders(cloneHeader);
    return this._http
    .get<any>(this.host + url)
    .pipe(
      map(res  => {
        return res;
      })
    );
  }
  // readonly ApiUrl ="https://localhost:44372/api";
  // readonly PhotoUrl = "https://localhost:44372/Photos";
  // constructor(private http:HttpClient) { }

  // get(url:string):Observable<any[]> {
  //   return this._http.get<any>(this.host+url);
  // }

}
