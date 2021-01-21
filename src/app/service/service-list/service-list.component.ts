import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'app/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  service:any = JSON.parse(sessionStorage.getItem('service'));
  services:any=[]

  /*services =[

    { "id":1	,"Service Name":"Full body service",	"Price":1200},
    { "id":2	,"Service Name":"Oil Change",	"Price":1200},
    { "id":3	,"Service Name":"Washing",	"Price":1200},
    { "id":4	,"Service Name":"Air",	"Price":1200}
 
   ];*/
   constructor( private router: Router,private serviceservice:ServiceService,private toastr: ToastrService ) { }
   ngOnInit(): void {
    this.loadServices()
    console.log(  sessionStorage.getItem('id'))
  }

  loadServices(){

    this.serviceservice.getServices().subscribe(res=>{
       
              this.services=res
             // console.warn(res)
           //  console.log(res)
   
         
       })
     
   }

   onDelete(service, index) {
    const result = confirm(`Are you sure you want to delete service: ${service['stv_name']}?`)
    if (result) {
      
      this.serviceservice.deleteService(service['stv_id']).subscribe(res=>{
        this.toastr.error(' deleted succesfully ','service',{
          positionClass:'toast-top-left',
          closeButton:true,
          progressAnimation:'decreasing',
          titleClass:'toast-title'
        })
  
        this.loadServices()
   
  
  })
  

    }
  }

  onEdit(service) {
    this.router.navigate(['/service-add'], {queryParams: {stv_id: service['stv_id']}})
  }
addservice() {
    this.router.navigate(['/service-add'])
  }
}
