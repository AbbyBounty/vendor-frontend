import { OrderService } from './../../order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

orders=[
  // {"Order No":1,"Customer Name":"steve jobs","Offer":"MANSOON DHAMAKA","Discount":20,"Vehicle No":"MH12LH2951","Amount":3000,"active":1},
  // {"Order No":2,"Customer Name":"steve jobs","Offer":"MANSOON DHAMAKA","Discount":20,"Vehicle No":"MH12LH2951","Amount":3000,"active":0},
  // {"Order No":3,"Customer Name":"steve jobs","Offer":"MANSOON DHAMAKA","Discount":20,"Vehicle No":"MH12LH2951","Amount":3000,"active":1},
  // {"Order No":4,"Customer Name":"steve jobs","Offer":"MANSOON DHAMAKA","Discount":20,"Vehicle No":"MH12LH2951","Amount":3000,"active":1},
  // {"Order No":5,"Customer Name":"steve jobs","Offer":"MANSOON DHAMAKA","Discount":20,"Vehicle No":"MH12LH2951","Amount":3000,"active":1},
  // {"Order No":6,"Customer Name":"steve jobs","Offer":"MANSOON DHAMAKA","Discount":20,"Vehicle No":"MH12LH2951","Amount":3000,"active":0},
  // {"Order No":7,"Customer Name":"steve jobs","Offer":"MANSOON DHAMAKA","Discount":20,"Vehicle No":"MH12LH2951","Amount":3000,"active":1},
  // {"Order No":7,"Customer Name":"steve jobs","Offer":"MANSOON DHAMAKA","Discount":20,"Vehicle No":"MH12LH2951","Amount":3000,"active":0},
  // {"Order No":8,"Customer Name":"steve jobs","Offer":"MANSOON DHAMAKA","Discount":20,"Vehicle No":"MH12LH2951","Amount":3000,"active":1}
]

  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.loadOrders()
  }

 

  loadOrders() {
    this.orderService
      .getOrders()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.orders = response['data']
          console.log(this.orders)
        } else {
          console.log(response['error'])
        }
      })
  }

  toggleActive(order) {
  
  }
}
