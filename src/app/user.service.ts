import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url='http://localhost:8080/vendor/profile'
  constructor(private router: Router,
    private httpClient: HttpClient) { }

    getUser(){
      const userid=sessionStorage.getItem('id')
  
  
      return this.httpClient.get(this.url+"/"+userid)
      
    }

    updateUser(ven_first_name:string,ven_last_name:string,ven_email:string,ven_mobile:string, ven_address:string){
      const vendorid=sessionStorage.getItem('id')
      const ven_shop_name=sessionStorage.getItem('shopName')
      const ven_proof=sessionStorage.getItem('proof')
    
      const httpOptions = {
       headers: new HttpHeaders({
        //  token: sessionStorage['token']
       })
     };


  
     const body = {
       ven_id:vendorid,
      ven_first_name:ven_first_name,
      ven_last_name:ven_last_name,
      ven_email:ven_email,
      ven_mobile:ven_mobile,
      ven_address:ven_address,
      ven_shop_name:ven_shop_name,
      ven_proof:ven_proof

      
     }
     
     return this.httpClient.put(this.url+"/"+ vendorid , body, httpOptions)


    }

}
