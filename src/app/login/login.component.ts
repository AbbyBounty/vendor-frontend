import { UserService } from './../user.service';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ''
  password = ''


  constructor(
    private router: Router,
    private userService:UserService) {}

  ngOnInit(): void {
  }


  onLogin() {
    this.userService
      .login(this.email, this.password)
      .subscribe(response => {
        if (response['status'] == 'success') {
          const data = response['data']
          console.log(data)

          // cache the user info
          sessionStorage['token'] = data['token']
          sessionStorage.setItem('firstname', data['ven_first_name']);
          


          // goto the dashboard
          this.router.navigate(['/dashboard'])

        } else {
          alert('invalid email or password')
        }
      })
  }

  // onLogin() {
  //   //alert(this.email.length);
  //     if (this.email.length == 0) {
  //       alert('enter email');
  //     } else if (this.password.length ==0) {
  //       alert('enter password');
  //     } else {
  
  //       let observableResult = this.loginService.login(this.email,this.password);
  //       observableResult.subscribe((result) => {
  //         // console.log(result);
  //         if(result==null) {
  //           alert("invalid login");
  //           this.router.navigate(['']);
  //           console.log(observableResult)
  //         }
  //     else
  //       {
  //         sessionStorage['login_status'] = '1';
  //           sessionStorage.setItem('firstname', result['ven_first_name']);
  //           sessionStorage.setItem('id', result['ven_id']);
  //           sessionStorage.setItem('shopName', result['ven_shop_name']);
  //           sessionStorage.setItem('proof', result['ven_proof']);
  //           sessionStorage.setItem('flag','true');
  //           console.log("vendor"+sessionStorage.getItem('id'))

          

        

          
          
           
           
         

           

  //           // var cart = [];
  //           // if(localStorage.getItem('cart') == null) {
  //           //   localStorage.setItem('cart', JSON.stringify(cart));
  //           //   console.log('added empty cart into local storage');
  //           // }
  //          // this.emtService.navBarSwitch(true);
  //         //  console.log(result)
  //           this.router.navigateByUrl("dashboard");
  //       }
  //     });
        
  //     }
  //   }
  
  
    onSignup() {
      this.router.navigate(['/register']);
    }
    onCancel(){
      this.router.navigate(['']);
    }

}
