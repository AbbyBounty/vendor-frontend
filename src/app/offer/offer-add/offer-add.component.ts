import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from 'app/offer.service';

@Component({
  selector: 'app-offer-add',
  templateUrl: './offer-add.component.html',
  styleUrls: ['./offer-add.component.css']
})
export class OfferAddComponent implements OnInit {
  offer = null
  
  ofr_name = " "
  ofr_code=" "
  ofr_discount = 0
  ofr_validity=" "
 
  id=null
  constructor(private activatedRoute: ActivatedRoute,private router: Router, private offerService:OfferService,private toastr: ToastrService) { }

  ngOnInit(): void {

    
    let id = this.activatedRoute.snapshot.queryParams['id']
    this.id=id
      console.log(id+'id')
      
       if (id>0) {
        // edit product
        this.offerService
          .getOfferDetails(id)
          .subscribe(response => {
             if (response) {
           
            this.ofr_name=response['ofr_name']
            this.ofr_code=response['ofr_code']
            this.ofr_discount = response['ofr_discount']
            this.ofr_validity=response['ofr_validity']
           
               const offers = response
      
               this.offer=1
             
             }
          })
       }
    }
    onUpdate() {
      console.log(this.offer +"offer onupdate")
  
     if (this.offer>0) {
       // edit
      console.log(this.offer +"onupdate")
  
       this.offerService
         .updateOffer(this.id, this.ofr_name,this.ofr_code,this.ofr_discount,this.ofr_validity)
         .subscribe(response => {
          
           // console.log(response)
           this.ofr_name=this.offer['ofr_name']
           this.ofr_code=this.offer['ofr_code']
           this.ofr_discount=this.offer['ofr_discount']
           this.ofr_validity=this.offer['ofr_validity']
           console.log(this.offer['ofr_id']+"offer id update")
  
           // if (response['status'] == 'success') {
          
            this.toastr.warning(' updated succesfully ','offer',{
              positionClass:'toast-top-left',
              closeButton:true,
              progressAnimation:'decreasing',
              titleClass:'toast-title'
            })

             this.router.navigate(['/offer'])
           // }
         })
     } else {
       // insert
       this.offerService
         .insertOffer(this.ofr_name,this.ofr_code,this.ofr_discount,this.ofr_validity)
         .subscribe(response => {
          
          this.toastr.success(this.ofr_name+' offer added succesfully ')
             this.router.navigate(['/offer'])
           // }
         })
     }
   
   }
}
