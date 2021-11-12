import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ibooking, IbookingResult } from '../common/interface/commonInterface';
import { CommonServiceService } from '../common/service/common-service.service';

@Component({
  selector: 'app-booking-journey',
  templateUrl: './booking-journey.component.html',
  styleUrls: ['./booking-journey.component.scss']
})
export class BookingJourneyComponent implements OnInit,OnDestroy {
  getArray:Ibooking[];
  subscription:Subscription;
  subscription1:Subscription;
  subscription2:Subscription;
  quantity:number;
  amount:number;
  amouunts:number;
  Name:string;
  address:string;
  totalValue:number=0;
  setBooking:IbookingResult[]=[];
  getBooking:IbookingResult[]=[];
  displayedColumns: string[] = ['No','name','amount','image','action'];
  dataSource=new MatTableDataSource<Ibooking>()
  getCartItem:Ibooking[]=[];
 

  constructor(private service:CommonServiceService, private router:Router,private _snackBar: MatSnackBar) { }
 

  ngOnInit() {
    this.subscription=this.service.getBooking().subscribe(value=>{this.getArray=value;})
    this.subscription1=this.service.getAmount().subscribe(value=>{this.amouunts=value;console.log(this.amouunts)})
    this.subscription2=this.service.getEventBooking().subscribe(value=>{this.getBooking=value;})
    this.service.loadCart();
    this.getCartItem=this.service.getCartItems();
    this.dataSource.data=this.getCartItem;
  }
  home(){
    this.router.navigate(["/logIn"]);
  }
  
  back(){
    this.router.navigate(["/gallery"]);
  }

  details(){
    this.router.navigate(["/journeyDetails"]);
  }

  delete(i){
      this.getCartItem.splice(i,1);
      this.dataSource=new MatTableDataSource<Ibooking>(this.getCartItem)
      this.totalValue=0; 
      this.service.removeSession(i);
      this.service.loadCart;
      this.getCartItem=this.service.getCartItems();
      this.dataSource=new MatTableDataSource<Ibooking>(this.getCartItem)  
      this.service.decreaseBatchCount();
  }


  total():number{
    var alength=this.getCartItem.length-1;
    for(var i=0;i<=alength;i++){
      this.totalValue=this.totalValue+this.getCartItem[i].amount;
    }
    return this.totalValue;
  
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
