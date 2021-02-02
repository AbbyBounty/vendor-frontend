import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/vendor'

  constructor(
    private httpClient: HttpClient) { }

    login(email: string, password: string) {
      const body = {
        ven_email: email,
        ven_password: password
      }
  
      return this.httpClient.post(this.url + '/signin', body)
    }

  getUsers() {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    
    return this.httpClient.get(this.url, httpOptions)
  }

  

  getUser(){
    return this.httpClient.get(this.url)
  }

  updateUser(){
    return this.httpClient.get(this.url)

  }

}
