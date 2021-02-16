import { OrderService } from './../../order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.showOrderHistory()
  }
  
  orderHistories=[
    // {	"Order Id":161,"Customer Name":"steve",	"Date":"12/12/1994",	"Vehicle Number":"MH12LH2967","Amount":1500},
    // {	"Order Id":112,"Customer Name":"john",	"Date":"12/12/1994",	"Vehicle Number":"MH12LH2967","Amount":1500},
    // {	"Order Id":3313,"Customer Name":"will",	"Date":"12/12/1994",	"Vehicle Number":"MH12LH2967","Amount":1500},
    // {	"Order Id":124,"Customer Name":"kane",	"Date":"12/12/1994",	"Vehicle Number":"MH12LH2967","Amount":1500},
    // {	"Order Id":155,"Customer Name":"tim",	"Date":"12/12/1994",	"Vehicle Number":"MH12LH2967","Amount":1500},
    // {	"Order Id":111,"Customer Name":"paulo",	"Date":"12/12/1994",	"Vehicle Number":"MH12LH2967","Amount":1500}
  ]

showOrderHistory()
{
  this.orderService
  .getOrderHistory()
  .subscribe(response => {
    if (response['status'] == 'success') {
      this. orderHistories = response['data']
      console.log(this. orderHistories)
    } else {
      console.log(response['error'])
    }
  })

//   calculateAmount()
// {
//   let unit_price={
//     sugar: 22,
//     butter: 12,
//     eggs: 2,
//     vanilla:43    
//   };
  
}

onLogout(){

}
}
