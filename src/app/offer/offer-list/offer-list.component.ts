import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfferService } from 'app/offer.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {

 // offer:any = JSON.parse(sessionStorage.getItem('offer'));
  offers :any =[]
  /*offers =[

    { "id":1	,"Offer Name":"SUMMER SPECIAL",	"Discount":12,"Validity":"23/01/2020"},
    { "id":2	,"Offer Name":"MANSOON OFFER",	"Discount":10,"Validity":"23/01/2020"},
    { "id":3	,"Offer Name":"DIWALI DHAMAKA",	"Discount":50,"Validity":"23/01/2020"},
    { "id":4	,"Offer Name":"SEASON END",	"Discount":5,"Validity":"23/01/2020"}
 
   ];*/
   constructor( private router: Router, private offerService:OfferService, private toastr: ToastrService ) {
  }
  ngOnInit(): void {
    
    this.loadOffer()
    console.log(  sessionStorage.getItem('id'))
  }

  loadOffer(){

    this.offerService.getOffer().subscribe(res=>{

              this.offers=res
       })
     
   }


  onEdit(offer) {
    this.router.navigate(['/offer-add'], {queryParams: {id: offer['ofr_id']}})
  }
addoffer() {
    this.router.navigate(['/offer-add'])
  }
  onDelete(offer, index) {
    const result = confirm(`Are you sure you want to delete Offer: ${offer['ofr_name']}?`)
    if (result) {
      
      this.offerService.deleteOffer(offer['ofr_id']).subscribe(res=>{
        this.toastr.error(' deleted succesfully ','offer',{
          positionClass:'toast-top-left',
          closeButton:true,
          progressAnimation:'decreasing',
          titleClass:'toast-title'
        })
  
        this.loadOffer()
   
  
  })
    }
  }
}
