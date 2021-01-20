import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/vendor/mechanic';
@Injectable({
  providedIn: 'root'
})
export class MechanicService {

  constructor(private httpclient: HttpClient) { }
  
  getAllMechanic()
  { 
    const result = this.httpclient.get(baseUrl)
    return result 
  }
}
