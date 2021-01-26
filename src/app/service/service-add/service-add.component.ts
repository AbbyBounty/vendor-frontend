import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'app/service.service';
@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {
  service = null


  stv_name = " "
  stv_price = null
  
  id = null
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private serviceService: ServiceService, private toastr: ToastrService) { }

  


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.queryParams['id']
    console.log('service id= '+id)
    if (id) {
      // edit mechaninc
      this.serviceService
        .getserviceDetails(id)
        .subscribe(response => {
          if (response['status'] == 'success') {
            console.log(response)
            const mechanincs = response['data']
            console.log(mechanincs[0])
            if (mechanincs.length > 0) {
              
              this.stv_name = mechanincs[0]['stv_name']
              this.stv_price = mechanincs[0]['stv_price']
             

             this.service=1
            }
          }
        })
    }

  
  }



  onUpdate() {
    const id = this.activatedRoute.snapshot.queryParams['id']

    if (this.service) {
      // edit
      this.serviceService
        .updateservice(id, this.stv_name, this.stv_price)
        .subscribe(response => {
          if (response['status'] == 'success') {
            this.toastr.warning(' updated succesfully ','service',{
                          positionClass:'toast-top-left',
                          closeButton:true,
                          progressAnimation:'decreasing',
                          titleClass:'toast-title'
                        })
            this.router.navigate(['/services'])
          }
        })
    } else {
      // insert
      this.serviceService
        .insertservice(this.stv_name, this.stv_price)
        .subscribe(response => {
          if (response['status'] == 'success') {
            this.toastr.success(this.stv_name+' service added succesfully ')

            this.router.navigate(['/services'])
          }
        })
    }

  }

}

