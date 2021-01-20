import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/vendor/offer';
@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private httpclient: HttpClient) { }

  getAllOffer()
  { 
    const result = this.httpclient.get(baseUrl)
    return result 
  }
}
