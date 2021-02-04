import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  httpClient: HttpClient

  url = `http://localhost:3000/vendor/profile`

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  getProfile() {
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };

    return this.httpClient.get(this.url, httpOptions)

  }
}
