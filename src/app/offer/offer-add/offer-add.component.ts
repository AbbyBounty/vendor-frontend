
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  ofr_validity=""

  id = null
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private offerService: OfferService, private toastr: ToastrService) { }

  


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.queryParams['id']
    console.log('offer id= '+id)
    if (id) {
      // edit mechaninc
      this.offerService
        .getOfferDetails(id)
        .subscribe(response => {
          if (response['status'] == 'success') {
            console.log(response)
            const offers = response['data']
            console.log(offers[0])
            if (offers.length > 0) {
              
              this.ofr_name = offers[0]['ofr_name']
              this.ofr_code = offers[0]['ofr_code']
              this.ofr_discount = offers[0]['ofr_discount']
              this.ofr_validity = offers[0]['ofr_validity']

             

             this.offer=1
            }
          }
        })
    }

  
  }



  onUpdate() {
    const id = this.activatedRoute.snapshot.queryParams['id']

    if (this.offer) {
      // edit
      this.offerService
        .updateOffer(id, this.ofr_name, this.ofr_code, this.ofr_discount,this.ofr_validity)
        .subscribe(response => {
          if (response['status'] == 'success') {
            this.toastr.warning(' updated succesfully ','offer',{
                          positionClass:'toast-top-left',
                          closeButton:true,
                          progressAnimation:'decreasing',
                          titleClass:'toast-title'
                        })
            this.router.navigate(['/offers'])
          }
        })
    } else {
      // insert
      this.offerService
        .insertOffer(this.ofr_name, this.ofr_code, this.ofr_discount,this.ofr_validity)
        .subscribe(response => {
          if (response['status'] == 'success') {
            this.toastr.success(this.ofr_name+' offer added succesfully ')

            this.router.navigate(['/offers'])
          }
        })
    }

  }

}


