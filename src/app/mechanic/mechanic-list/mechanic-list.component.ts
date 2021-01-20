import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{MechanicService} from 'app/mechanic.service'

@Component({
  selector: 'app-mechanic-list',
  templateUrl: './mechanic-list.component.html',
  styleUrls: ['./mechanic-list.component.css']
})
export class MechanicListComponent implements OnInit {
  mechanics :any =[]
  constructor(private router: Router,private service:MechanicService) { }

  ngOnInit(): void {
    this.service.getAllMechanic().subscribe((result) => { 
      this.mechanics=result
    console.log(result)
  })
  }

}
