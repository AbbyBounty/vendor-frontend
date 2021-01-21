import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'app/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {

  service = null;
  
  stv_name = " "
  stv_price = null

  id=null
  constructor(private activatedRoute: ActivatedRoute,private router: Router, private serviceService:ServiceService,private toastr: ToastrService) { }

  ngOnInit(): void {

    
    let id = this.activatedRoute.snapshot.queryParams['id']
    this.id=id
      console.log(id+'id')
      
       if (id>0) {
        // edit product
        this.serviceService
          .getServiceDetails(id)
          .subscribe(response => {
             if (response) {
           
            this.stv_name=response['stv_name']
            this.stv_price=response['stv_price']
          
           
               const services = response
      
               this.service=1
             
             }
          })
       }
    }

onUpdate(){
    console.log(this.service +"service onupdate")

   if (this.service>0) {
     // edit
    console.log(this.service +"onupdate")

     this.serviceService
       .updateService(this.id, this.stv_name,this.stv_price)
       .subscribe(response => {
        
         // console.log(response)
         this.stv_name=this.service['stv_name']
         this.stv_price=this.service['stv_price']

         console.log(this.service['stv_id']+"service id update")

         // if (response['status'] == 'success') {
          this.toastr.warning(' updated succesfully ','service',{
            positionClass:'toast-top-left',
            closeButton:true,
            progressAnimation:'decreasing',
            titleClass:'toast-title'
          })

           this.router.navigate(['/service'])
         // }
       })
   } else {
     // insert
     this.serviceService
       .insertService(this.stv_name,this.stv_price)
       .subscribe(response => {
         // if (response['status'] == 'success') {
           const service = JSON.parse(localStorage.getItem('service'));
           console.log(service.v_mechanics)
           console.log(JSON.stringify(service))
           localStorage.setItem('service',JSON.stringify(service))
           // console.log(localStorage.getItem('vehicle'))

           // localStorage.setItem('vehicle',)
          
           this.toastr.success(this.stv_name+' service added succesfully ')
         this.router.navigate(['/service'])
         // }
       })
   }
 
 }

}
