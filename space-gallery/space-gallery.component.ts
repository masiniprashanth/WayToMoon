import { Component, OnDestroy, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ibooking } from '../common/interface/commonInterface';
import { Igallery } from '../common/interface/planetinterface';
import { CommonServiceService } from '../common/service/common-service.service';
import { JourneyDetailsComponent } from '../journey-details/journey-details.component';
import { PlanetDeatilsComponent } from '../planet-deatils/planet-deatils.component';

@Component({
  selector: 'app-space-gallery',
  templateUrl: './space-gallery.component.html',
  styleUrls: ['./space-gallery.component.scss']
})
export class SpaceGalleryComponent implements OnInit,OnDestroy,AfterViewInit {

  @ViewChild(PlanetDeatilsComponent) child;

  rocketIntro:string;
  bookingArray:Ibooking[]=[];
  singleBookingArray:Ibooking[]=[];
  bookingsndChild:Ibooking[]=[];
  getArray:Ibooking[];
  subscription:Subscription;
  amountResult:number;
  getEvent:Ibooking[]=[]
  batchCount:number=0;
  

  galleryDetails:Ibooking[]=[];
  constructor(private router:Router,private service:CommonServiceService) { }
  
  ngAfterViewInit() {
    this.rocketIntro=this.child.cRocketIntroduction;
  }

  ngOnInit() {
   this.batchCount=this.service.batchCount;  
   this.bookingsndChild=[]=[{
      "name":"europa",
     "Distance":"250Billion KM",
      "amount":1400000,
      "image":"../../assets/saturnOne.jpg"
    },
    {
      "name":"Ganymede",
     "Distance":"250Billion KM",
      "amount":1600000,
      "image":"../../assets/mercuryOne.jpg"
    },
    {
      "name":"callisto",
     "Distance":"250Billion KM",
      "amount":1800000,
      "image":"../../assets/uranusOne.jpg"
    }]

    this.galleryDetails=[]=[
      {
        "name":"jupiter",
       "Distance":"120Billion KM",
        "amount":200000,
        "image":"../../assets/jupiterOne.jpg"
      },
      {
        "name":"Venus",
       "Distance":"90Billion KM",
        "amount":400000,
        "image":"../../assets/VenusOne.jpg"
      }, 
      {
        "name":"Mercury",
       "Distance":"100Billion KM",
        "amount":600000,
        "image":"../../assets/mercuryOne.jpg"
      },
      {
        "name":"Saturn",
       "Distance":"130Billion KM",
        "amount":800000,
        "image":"../../assets/saturnOne.jpg"
      },
      {
        "name":"Moon",
       "Distance":"10Billion KM",
        "amount":1000000,
        "image":"../../assets/moonOne.png"
      },
      {
        "name":"Uranus",
       "Distance":"200Billion KM",
        "amount":1200000,
        "image":"../../assets/uranusOne.jpg"
      },
      {
        "name":"Neptune",
       "Distance":"250Billion KM",
        "amount":1400000,
        "image":"../../assets/uranusOne.jpg"
      },
      {
        "name":"Pluto",
       "Distance":"250Billion KM",
        "amount":1600000,
        "image":"../../assets/plutoOne.jpg"
      },
      {
        "name":"Mars",
       "Distance":"250Billion KM",
        "amount":1800000,
        "image":"../../assets/marsoOne.jpg"
      }
    ]
    this.subscription=this.service.getBooking().subscribe(value=>{this.getArray=value;})
   
  }

  Journey(){
    console.log(this.getArray)
  }

  receiveMessage($event) {
    this.getEvent = $event
  }

  cart(){
    this.router.navigate(["/bookingJourney"]);
  }
 
  book(i){
    this.amountResult=this.galleryDetails[i].amount;
    console.log(this.amountResult)
    this.service.setAmountResult(this.amountResult)
    this.bookingArray.push(this.galleryDetails[i]);
    this.service.setBooking(this.bookingArray);
    this.service.addToCart(this.galleryDetails[i])
    this.batchCount=this.service.increaseBatchCount();
  }

  singleBook(i){
    this.amountResult=this.galleryDetails[i].amount;
    this.service.setAmountResult(this.amountResult)
    this.service.setAmountResult(this.amountResult)
    this.singleBookingArray.push(this.galleryDetails[i]);
    this.service.setBooking(this.singleBookingArray);
    this.router.navigate(["/singleBook"]); 
  }

  singleBooking(i){
    this.amountResult=this.getEvent[i].amount;
    this.service.setAmountResult(this.amountResult)
    this.service.setAmountResult(this.amountResult)
    this.singleBookingArray.push(this.getEvent[i]);
    this.service.setBooking(this.singleBookingArray);
    this.router.navigate(["/singleBook"]); 
  }

  booking(i){
    this.amountResult=this.getEvent[i].amount;
    this.service.setAmountResult(this.amountResult)
    this.bookingArray.push(this.getEvent[i]);
    this.service.setBooking(this.bookingArray);
    this.service.addToCart(this.getEvent[i]);
    this.batchCount=this.service.increaseBatchCount();   
    }
  

  chat(){
    this.router.navigate(["/adminChat"]);
  }

  back(){
    this.router.navigate(["/logIn"]);
  }

  home(){
    this.router.navigate(["/logIn"]);
   
  }

  details(){
    this.router.navigate(["/journeyDetails"]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
