import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ibooking } from '../common/interface/commonInterface';
import { CommonServiceService } from '../common/service/common-service.service';

@Component({
  selector: 'app-single-booking',
  templateUrl: './single-booking.component.html',
  styleUrls: ['./single-booking.component.scss']
})
export class SingleBookingComponent implements OnInit {

  amounts:number;
  getArray:Ibooking[];
  subscription:Subscription;
  subscription1:Subscription;
  totalPrice:number;
  selected:number;
  constructor( private service:CommonServiceService, private router:Router) { }

  ngOnInit() {
    this.subscription=this.service.getBooking().subscribe(value=>{this.getArray=value;})
    this.subscription1=this.service.getAmount().subscribe(value=>{this.amounts=value;console.log(this.amounts);this.totalPrice=this.amounts})
  }

  chat(){
    this.router.navigate(["/adminChat"]);
  }

  back(){
    this.router.navigate(["/gallery"]);
  }

  home(){
    this.router.navigate(["/logIn"]);
   
  }

  details(){
    this.router.navigate(["/journeyDetails"]);
  }

  selectOption(id: number) {
    //getted from event
    console.log(id);
    //getted from binding
    console.log(this.selected)
    this.totalPrice=this.amounts*id;
  }

}
