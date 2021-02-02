import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'app/service.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  services: any = []
  constructor(private router: Router, private serviceservice: ServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadservices()
  }



  loadservices() {
    this.serviceservice
      .getservices()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.services = response['data']
          console.log(this.services)
        } else {
          console.log(response['error'])
        }
      })
  }

  onEdit(service) {
    this.router.navigate(['/service-add'], { queryParams: { id: service['stv_id'] } })

  }

  addservice() {
    this.router.navigate(['/service-add'])
  }


  onDelete(service, index) {
    const result = confirm(`Are you sure you want to delete vehicle: ${service['stv_name']}?`)
    if (result) {

      this.serviceservice.deleteservice(service['stv_id']).subscribe(res => {
        this.toastr.error(' deleted succesfully ', 'service', {
          positionClass: 'toast-top-left',
          closeButton: true,
          progressAnimation: 'decreasing',
          titleClass: 'toast-title'
        })
        this.loadservices()
      })
    }
  }
}
