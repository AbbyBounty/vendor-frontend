import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  httpClient: HttpClient


  url = `http://localhost:3000/Offer`

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  getOffers() {
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };

    return this.httpClient.get(this.url, httpOptions)

  }


  getOfferDetails(id) {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']

      })
    };


    return this.httpClient.get(this.url + "/details/" + id, httpOptions)
  }


  
  deleteOffer(id) {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']

      })
    };
    console.log(this.url + "/" + id)

    return this.httpClient.delete(this.url + "/" + id, httpOptions)
  }



  updateOffer(id:number, ofr_name:string,ofr_code:string, ofr_discount:number,ofr_validity) {
    // add the token in the request header

    console.log(id + "Offer id")
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };

    const body = {
     
      ofr_name: ofr_name,
      ofr_code: ofr_code,
      ofr_discount: ofr_discount,
      ofr_validity:ofr_validity

    }

    return this.httpClient.put(this.url + "/" + id, body, httpOptions)
  }



  insertOffer(ofr_name:string,ofr_code:string, ofr_discount:number,ofr_validity) {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    const ven_id = sessionStorage.getItem('id')

    const body = {
      ofr_name: ofr_name,
      ofr_code: ofr_code,
      ofr_discount: ofr_discount,
      ofr_validity:ofr_validity,
    
    }

    return this.httpClient.post(this.url + "/create", body, httpOptions)
  }
}
