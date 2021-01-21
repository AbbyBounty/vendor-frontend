import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{MechanicService} from 'app/mechanic.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mechanic-list',
  templateUrl: './mechanic-list.component.html',
  styleUrls: ['./mechanic-list.component.css']
})
export class MechanicListComponent implements OnInit {
  mechanic:any = JSON.parse(sessionStorage.getItem('mechanic'));
  mechanics :any =[]
  constructor(private router: Router,private mechanicService:MechanicService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadMechanics()
    console.log(  sessionStorage.getItem('id'))
  }

  loadMechanics(){

    this.mechanicService.getMechanics().subscribe(res=>{
         
   
       
              this.mechanics=res
             // console.warn(res)
           //  console.log(res)
   
         
       })
     
   }
  
  onEdit(mechanic)
  {
     this.router.navigate(['/mechanic-add'],{queryParams:{id:mechanic['mech_id']}})
  
  }
  
  addmechanic()
{

this.router.navigate(['/mechanic-add'])
}
onDelete(mechanic, index) {
  const result = confirm(`Are you sure you want to delete vehicle: ${mechanic['mech_first_name']}?`)
  if (result) {
    
    this.mechanicService.deleteMechanic(mechanic['mech_id']).subscribe(res=>{
      this.toastr.error(' deleted succesfully ','mechanic',{
        positionClass:'toast-top-left',
        closeButton:true,
        progressAnimation:'decreasing',
        titleClass:'toast-title'
      })

      this.loadMechanics()
 

})


  }
}

}
