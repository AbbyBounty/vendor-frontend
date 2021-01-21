import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:8080/user'






  constructor(
    private router: Router,
    private httpClient: HttpClient) { }



  login(email: string, password: string) {
    const body = {
      "u_email": email,
      "u_password": password
    }

    return this.httpClient.post(this.url+"/auth" , body)
  }

  addUser(userObj){    
    let data={
      "name":userObj.name,
      "email":userObj.email,
      "address":userObj.address,
      "mobile":userObj.mobile,
      "password":userObj.password,
      "birth":userObj.birth
    }
    return  this.httpClient.post(this.url + "/addMember",data);
  }
 
}
