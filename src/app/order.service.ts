import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class OrderService {

  url=`http://localhost:3000`

  constructor(private httpClient: HttpClient) { }

  getOrders() {
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };

    return this.httpClient.get(this.url+'/myorders', httpOptions)

  }

  getOrderHistory() {
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };

    return this.httpClient.get(this.url+'/myorders/history', httpOptions)

  }

 
}
