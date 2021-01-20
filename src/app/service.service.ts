import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/vendor/services';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpclient: HttpClient) { }
  
  getAllService()
  { 
    const result = this.httpclient.get(baseUrl)
    return result 
  }
}
