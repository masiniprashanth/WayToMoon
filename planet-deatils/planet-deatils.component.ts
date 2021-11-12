import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ibooking } from '../common/interface/commonInterface';
import { CommonServiceService } from '../common/service/common-service.service';

@Component({
  selector: 'app-planet-deatils',
  templateUrl: './planet-deatils.component.html',
  styleUrls: ['./planet-deatils.component.scss']
})
export class PlanetDeatilsComponent implements OnInit {
  @Input() childMessage: Ibooking[];
  @Output() messageEvent = new EventEmitter<Ibooking[]>();
  isShown: boolean = false ;
  animal: string;
  name: string;
  bookingArray:Ibooking[]=[];
  private isButtonVisible = true;
  getArray:Ibooking[];
  palnetChild:Ibooking[]=[];
  subscription:Subscription;
  amountResult:number;
  cRocketIntroduction:string="Compared with airbreathing engines, rockets are lightweight and powerful and capable of generating large accelerations. To control their flight, rockets rely on momentum, airfoils, auxiliary reaction engines, gimballed thrust, momentum wheels, deflection of the exhaust stream, propellant flow, spin, or gravity"

  constructor( private router:Router,private service:CommonServiceService,public dialog: MatDialog) { }



  ngOnInit() {
    this.palnetChild=[]=[  {
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
    }]

  
  }

  sendMessage() {
    this.messageEvent.emit(this.palnetChild)
    this.isShown = ! this.isShown;
  }

  // book(i){
  //   this.amountResult=this.childMessage[i].amount
  //   this.service.setAmountResult(this.amountResult)
  //   this.bookingArray.push(this.childMessage[i]);
  //   this.service.setBooking(this.bookingArray);
  //   this.router.navigate(["/bookingJourney"]); 
   
  //   }
  
}
