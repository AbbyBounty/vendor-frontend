import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  ven_id = null
  ven_address = " "
  ven_email = " "
  ven_first_name = " "
  ven_last_name = " "
  ven_mobile = " "
  ven_password = " "
  ven_proof = " "
  ven_shop_name = " "
  
  customers=[
    {"Name":"steve jobs","Address":"USA","Email":"steve@gmail.com","Contact No":"898989797" },
    {"Name":"steve jobs","Address":"USA","Email":"steve@gmail.com","Contact No":"898989797" },
    {"Name":"steve jobs","Address":"USA","Email":"steve@gmail.com","Contact No":"898989797" },
    {"Name":"steve jobs","Address":"USA","Email":"steve@gmail.com","Contact No":"898989797" },
    {"Name":"steve jobs","Address":"USA","Email":"steve@gmail.com","Contact No":"898989797" }
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }



  viewHistory(customer){
    this.router.navigate(['/order-history'], {queryParams: {id: customer['Name']}})

  }
}
