import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {IhttpServe} from '../interface/commonInterface'

@Injectable({
  providedIn: 'root'
})
export class HttpServeService {

  constructor(private cHttpClient:HttpClient) { }
 

  GetEmployeeDetails(): Promise<IhttpServe> {
    return new Promise((resolve, reject) => {
        // https://reqres.in/api/users?page=1
        this.cHttpClient.get<IhttpServe>(environment.baseUrl + '/api/users')
            .subscribe((response: any) => {
                resolve(response);
            },
                (reject: any) => {
                    // this.ServiceResponce = this.cAPIException.Exception_Message(reject);
                    resolve(reject);
                });
    });
}
}
