import { OfferService } from 'app/offer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {
  Offers: any = []
  constructor(private router: Router, private OfferService: OfferService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadOffers()
  }



  loadOffers() {
    this.OfferService
      .getOffers()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.Offers = response['data']
          console.log(this.Offers)
        } else {
          console.log(response['error'])
        }
      })
  }

  onEdit(offer) {
  
    this.router.navigate(['/offer-add'], { queryParams: { id: offer['ofr_id'] } })

  }

  addOffer() {
    this.router.navigate(['/offer-add'])
  }


  onDelete(offer, index) {
    const result = confirm(`Are you sure you want to delete vehicle: ${offer['ofr_name']}?`)
    if (result) {

      this.OfferService.deleteOffer(offer['ofr_id']).subscribe(res => {
        this.toastr.error(' deleted succesfully ', 'Offer', {
          positionClass: 'toast-top-left',
          closeButton: true,
          progressAnimation: 'decreasing',
          titleClass: 'toast-title'
        })
        this.loadOffers()
      })
    }
  }
}
