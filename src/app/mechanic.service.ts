import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MechanicService {
  httpClient:HttpClient
  

  url = `http://localhost:8080/vendor/mechanic`
  
  constructor(httpClient: HttpClient) { 
    this.httpClient=httpClient
  }
  
  getMechanics(){
    const vendorid=sessionStorage.getItem('id')


    return this.httpClient.get('http://localhost:8080/vendor/mechanicByUserid/'+vendorid)
    
  }
  getMechanicDetails(id) {
    // add the token in the request header
    const httpOptions = {
     headers: new HttpHeaders({
      //  token: sessionStorage['token']

     })
    };
    
    console.log(this.url+"/"+id)

   return this.httpClient.get(this.url  + "/"+id, httpOptions)
  }

  deleteMechanic(id) {
    // add the token in the request header
    const httpOptions = {
     headers: new HttpHeaders({
      //  token: sessionStorage['token']

     })
   };
  console.log(this.url+"/"+id)

   return this.httpClient.delete('http://localhost:8080/vendor/mechanic' + "/"+id, httpOptions)
  }

  updateMechanic(mech_id:number,mech_first_name: string, mech_last_name: string, mech_mobile: string) {
    // add the token in the request header

    console.log(mech_id+"Mechanic id")
    const httpOptions = {
     headers: new HttpHeaders({
      //  token: sessionStorage['token']
     })
    };
    
    const body = {
      mech_id:mech_id,
      mech_first_name: mech_first_name,
      mech_last_name: mech_last_name,
      mech_mobile: mech_mobile,
      
     }
     
     return this.httpClient.put(this.url , body, httpOptions)
  }
  
  insertMechanic(mech_first_name: string, mech_last_name: string, mech_mobile: string) {
    // add the token in the request header
    const httpOptions = {
     headers: new HttpHeaders({
       // token: sessionStorage['token']
     })
    };
    const ven_id=sessionStorage.getItem('id')

  const body = {
    mech_first_name: mech_first_name,
    mech_last_name: mech_last_name,
    mech_mobile: mech_mobile,
    mech_vendor:{
      ven_id:ven_id
    }
  }
  
  return this.httpClient.post(this.url + "/create", body, httpOptions)
}
}
