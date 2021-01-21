import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  httpClient:HttpClient
  

  url = `http://localhost:8080/vendor/offer`
  
  constructor(httpClient: HttpClient) { 
    this.httpClient=httpClient
  }
  getOffer(){
    const userid=sessionStorage.getItem('id')


    return this.httpClient.get('http://localhost:8080/vendor/offerByUserid/'+userid)
    
  }

  getOfferDetails(id) {
    // add the token in the request header
    const httpOptions = {
     headers: new HttpHeaders({
      //  token: sessionStorage['token']

     })
    };
    console.log(this.url+"/"+id)

    return this.httpClient.get(this.url  + "/"+id, httpOptions)
   }
 
   deleteOffer(id) {
    // add the token in the request header
    const httpOptions = {
     headers: new HttpHeaders({
      //  token: sessionStorage['token']

     })
   };
  console.log(this.url+"/"+id)

   return this.httpClient.delete('http://localhost:8080/vendor/offer' + "/"+id, httpOptions)
  }
  
   updateOffer(ofr_id:number,ofr_name: string, ofr_code: string, ofr_discount: number , ofr_validity:string) {
    // add the token in the request header

    console.log(ofr_id+"Offer id")
    const httpOptions = {
     headers: new HttpHeaders({
      //  token: sessionStorage['token']
     })
    };
    const body = {
      ofr_id:ofr_id,
      ofr_name: ofr_name,
      ofr_code: ofr_code,
      ofr_discount: ofr_discount,
      ofr_validity:ofr_validity
      
     }
     
     return this.httpClient.put(this.url , body, httpOptions)
   }
  
   insertOffer(ofr_name: string, ofr_code: string, ofr_discount: number,ofr_validity:string) {
    // add the token in the request header
    const httpOptions = {
     headers: new HttpHeaders({
       // token: sessionStorage['token']
     })
    };
    const ven_id=sessionStorage.getItem('id')

  const body = {
    ofr_name: ofr_name,
    ofr_code: ofr_code,
    ofr_discount: ofr_discount,
    ofr_validity:ofr_validity,
    ofr_vendor:{
      ven_id:ven_id
    }
  }
  
  return this.httpClient.post(this.url + "/create", body, httpOptions)
}
}
