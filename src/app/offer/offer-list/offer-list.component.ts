import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfferService } from 'app/offer.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {

  offers :any =[]
  /*offers =[

    { "id":1	,"Offer Name":"SUMMER SPECIAL",	"Discount":12,"Validity":"23/01/2020"},
    { "id":2	,"Offer Name":"MANSOON OFFER",	"Discount":10,"Validity":"23/01/2020"},
    { "id":3	,"Offer Name":"DIWALI DHAMAKA",	"Discount":50,"Validity":"23/01/2020"},
    { "id":4	,"Offer Name":"SEASON END",	"Discount":5,"Validity":"23/01/2020"}
 
   ];*/
   constructor( private router: Router, private service:OfferService) {
  }
  ngOnInit(): void {
    
    this.service.getAllOffer().subscribe((result) => { 
      this.offers=result
    console.log(result)
  })
  }



  onEdit(offer) {
    this.router.navigate(['/offer-add'], {queryParams: {id: offer['id']}})
  }
addoffer() {
    this.router.navigate(['/offer-add'])
  }

}
