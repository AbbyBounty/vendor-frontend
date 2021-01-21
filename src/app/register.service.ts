import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url=""


  constructor(
    private router: Router,
    private httpClient: HttpClient) { }


  register(userObj) {
    const body = {

      "ven_first_name":userObj.ven_first_name,
      "ven_last_name":userObj.ven_last_name,
      "ven_email":userObj.ven_email,
      "ven_mobile":userObj.ven_mobile,
      "ven_address":userObj.ven_address,
      "ven_password":userObj.ven_password,		
      "ven_proof":userObj.ven_proof,			
      "ven_shop_name":userObj.ven_shop_name
    }

    return this.httpClient.post(this.url+"/register" , body)
  }
}
