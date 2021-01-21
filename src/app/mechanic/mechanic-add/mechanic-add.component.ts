import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MechanicService } from 'app/mechanic.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-mechanic-add',
  templateUrl: './mechanic-add.component.html',
  styleUrls: ['./mechanic-add.component.css']
})
export class MechanicAddComponent implements OnInit {
  mechanic = null

  mech_first_name=" "			
	mech_last_name=" "
  mech_mobile = " "
  
  id=null
  constructor(private activatedRoute: ActivatedRoute,private router: Router, private mechanicService:MechanicService,private toastr: ToastrService) { }

  ngOnInit(): void {

    
  let id = this.activatedRoute.snapshot.queryParams['id']
  this.id=id
    console.log(id+'id')
    
     if (id>0) {
      // edit product
      this.mechanicService
        .getMechanicDetails(id)
        .subscribe(response => {
           if (response) {
         
          this.mech_first_name=response['mech_first_name']
          this.mech_last_name=response['mech_last_name']
          this.mech_mobile=response['mech_mobile']
         
             const mechanics = response
    
             this.mechanic=1
           
           }
        })
     }
  }

  onUpdate() {
    console.log(this.mechanic +"mechanic onupdate")

   if (this.mechanic>0) {
     // edit
    console.log(this.mechanic +"onupdate")

     this.mechanicService
       .updateMechanic(this.id, this.mech_first_name,this.mech_last_name,this.mech_mobile)
       .subscribe(response => {
        
         // console.log(response)
         this.mech_first_name=this.mechanic['mech_first_name']
         this.mech_last_name=this.mechanic['mech_last_name']
         this.mech_mobile=this.mechanic['mech_mobile']

         console.log(this.mechanic['mech_id']+"mechanic id update")

         // if (response['status'] == 'success') {
          this.toastr.warning(' updated succesfully ','mechanic',{
            positionClass:'toast-top-left',
            closeButton:true,
            progressAnimation:'decreasing',
            titleClass:'toast-title'
          })
           this.router.navigate(['/mechanic'])
         // }
       })
   } else {
     // insert
     this.mechanicService
       .insertMechanic(this.mech_first_name,this.mech_last_name,this.mech_mobile)
       .subscribe(response => {
         // if (response['status'] == 'success') {
          this.toastr.success(this.mech_first_name+' mechanic added succesfully ')
           this.router.navigate(['/mechanic'])
         // }
       })
   }
 
 }
}
