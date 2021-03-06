import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {

  url = 'http://localhost:3000/vendor'

  constructor(private router: Router,
    private httpClient: HttpClient) { }

  login(email: string, password: string) {
    const body = {
      ven_email: email,
      ven_password: password
    }

    return this.httpClient.post(this.url + '/signin', body)
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (sessionStorage['token']) {
      // user is already logged in
      // launch the component
      return true
    }

    // force user to login
    this.router.navigate(['/login'])

    // user has not logged in yet
    // stop launching the component
    return false
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



  getUser() {
    return this.httpClient.get(this.url)
  }

  updateUser(ven_id:number,ven_first_name:string,ven_last_name:String, ven_email:String,ven_mobile:string,ven_address:string,ven_shop_name:string){
    
    console.log( ven_id  + " vendor  id")
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    const body = {
      ven_id:ven_id,
      ven_first_name:ven_first_name,
      ven_last_name : ven_last_name,
      ven_email:ven_email,
      ven_mobile:ven_mobile,
      ven_address: ven_address,
      ven_shop_name:  ven_shop_name
    }
    
    return this.httpClient.put(this.url + "/profile/" + ven_id, body, httpOptions)

  }

}
