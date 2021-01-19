import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services =[

    { "id":1	,"Service Name":"Full body service",	"Price":1200},
    { "id":2	,"Service Name":"Oil Change",	"Price":1200},
    { "id":3	,"Service Name":"Washing",	"Price":1200},
    { "id":4	,"Service Name":"Air",	"Price":1200}
 
   ];
   constructor( private router: Router) {
  
  }
  ngOnInit(): void {
    
  }

  addService(){
    
  }

  onEdit(service) {
    this.router.navigate(['/service-add'], {queryParams: {id: service['id']}})
  }
addservice() {
    this.router.navigate(['/service-add'])
  }
}
