import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  httpClient:HttpClient
  

  url = `http://localhost:8080/vendor/services`
  
  constructor(httpClient: HttpClient) { 
    this.httpClient=httpClient
  }
  getServices(){
   // const userid=sessionStorage.getItem('id')
      const userid=1

    return this.httpClient.get('http://localhost:8080/user/servicesByUserid/'+userid)
    
  }
  getServiceDetails(id) {
    // add the token in the request header
    const httpOptions = {
     headers: new HttpHeaders({
      //  token: sessionStorage['token']

     })
   };
  console.log(this.url+"/"+id)

   return this.httpClient.get(this.url  + "/"+id, httpOptions)
  }

  deleteService(id) {
    // add the token in the request header
    const httpOptions = {
     headers: new HttpHeaders({
      //  token: sessionStorage['token']

     })
   };
  console.log(this.url+"/"+id)

   return this.httpClient.delete('http://localhost:8080/vendor/service' + "/"+id, httpOptions)
  }

  updateService(stv_id:number,stv_name: string, stv_price:number) {
    // add the token in the request header

    console.log(stv_id+"Service id")
    const httpOptions = {
     headers: new HttpHeaders({
      //  token: sessionStorage['token']
     })
   };

   const body = {
    stv_id:stv_id,
    stv_name: stv_name,
    stv_price: stv_price,
    
   }
   
   return this.httpClient.put(this.url , body, httpOptions)
 }

 insertService(stv_name: string, stv_price: number) {
   // add the token in the request header
   const httpOptions = {
    headers: new HttpHeaders({
      // token: sessionStorage['token']
    })
  };

  const ven_id=sessionStorage.getItem('id')

  const body = {
    stv_name: stv_name,
    stv_price: stv_price,
    stv_vendor:{
      ven_id:ven_id
    }
  }

  console.log("userid "+ven_id)
  return this.httpClient.post(this.url + "/create", body, httpOptions)
}

}
