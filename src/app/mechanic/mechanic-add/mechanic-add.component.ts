import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { MechanicService } from 'app/mechanic.service';
@Component({
  selector: 'app-mechanic-add',
  templateUrl: './mechanic-add.component.html',
  styleUrls: ['./mechanic-add.component.css']
})
export class MechanicAddComponent implements OnInit {
  mechanic = null

  mech_first_name = " "
  mech_last_name = " "
  mech_mobile = " "

  id = null
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private mechanicService: MechanicService, private toastr: ToastrService) { }

  


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.queryParams['id']
    console.log('mechanic id= '+id)
    if (id) {
      // edit mechaninc
      this.mechanicService
        .getMechanicDetails(id)
        .subscribe(response => {
          if (response['status'] == 'success') {
            console.log(response)
            const mechanincs = response['data']
            console.log(mechanincs[0])
            if (mechanincs.length > 0) {
              
              this.mech_first_name = mechanincs[0]['mech_first_name']
              this.mech_last_name = mechanincs[0]['mech_last_name']
              this.mech_mobile = mechanincs[0]['mech_mobile']
             

             this.mechanic=1
            }
          }
        })
    }

  
  }



  onUpdate() {
    const id = this.activatedRoute.snapshot.queryParams['id']

    if (this.mechanic) {
      // edit
      this.mechanicService
        .updateMechanic(id, this.mech_first_name, this.mech_last_name, this.mech_mobile)
        .subscribe(response => {
          if (response['status'] == 'success') {
            this.toastr.warning(' updated succesfully ','mechanic',{
                          positionClass:'toast-top-left',
                          closeButton:true,
                          progressAnimation:'decreasing',
                          titleClass:'toast-title'
                        })
            this.router.navigate(['/mechanics'])
          }
        })
    } else {
      // insert
      this.mechanicService
        .insertMechanic(this.mech_first_name, this.mech_last_name, this.mech_mobile)
        .subscribe(response => {
          if (response['status'] == 'success') {
            this.toastr.success(this.mech_first_name+' mechanic added succesfully ')

            this.router.navigate(['/mechanics'])
          }
        })
    }

  }

}
