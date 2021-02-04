import { RegisterService } from './../register.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  vendor = {
   "ven_first_name":"",
      "ven_last_name":"",
      "ven_email":"",
      "ven_mobile":"",
      "ven_address":"",
      "ven_password":"",		
      "ven_proof":"",			
      "ven_shop_name":""
  }

  
  constructor(private router: Router,private registerComponent:RegisterService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSignup(){
    let observableResult = this.registerComponent.register(this.vendor);
    observableResult.subscribe((result: any) => {

      this.toastr.success(' Registration Succesfully  Please Login ..','',{
        positionClass:'toast-top-left',
        closeButton:true,
        progressAnimation:'decreasing',
        titleClass:'toast-title'
      })
      this.router.navigate(['/login']);
    });

  }
  onCancel(){
    this.router.navigate(['/login']);
  }

}
