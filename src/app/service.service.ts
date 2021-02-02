import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  httpClient: HttpClient


  url = `http://localhost:3000/services`

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  getservices() {
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };

    return this.httpClient.get(this.url, httpOptions)

  }


  getserviceDetails(id) {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']

      })
    };


    return this.httpClient.get(this.url + "/details/" + id, httpOptions)
  }


  
  deleteservice(id) {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']

      })
    };
    console.log(this.url + "/" + id)

    return this.httpClient.delete(this.url + "/" + id, httpOptions)
  }



  updateservice(id:number, stv_name:string, stv_price:string) {
    // add the token in the request header

    console.log(id + "service id")
    const httpOptions = {
<<<<<<< Updated upstream
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };

    const body = {
     
      stv_name: stv_name,
      stv_price: stv_price,
     

=======
     headers: new HttpHeaders({
      //  token: sessionStorage['token']
     })
   };
   
   const body = {
    stv_id:stv_id,
    stv_name: stv_name,
    stv_price: stv_price,
   }
   
   return this.httpClient.put(this.url+"/"+stv_id , body, httpOptions)
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
>>>>>>> Stashed changes
    }

    return this.httpClient.put(this.url + "/" + id, body, httpOptions)
  }



  insertservice(stv_name:string, stv_price:string) {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    const ven_id = sessionStorage.getItem('id')

    const body = {
      stv_name: stv_name,
      stv_price: stv_price,
    
    }

    return this.httpClient.post(this.url + "/create", body, httpOptions)
  }
}
