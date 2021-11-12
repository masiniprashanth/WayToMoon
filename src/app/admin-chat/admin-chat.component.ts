import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IformGroup } from '../common/interface/commonInterface';
import { CommonServiceService } from '../common/service/common-service.service';

@Component({
  selector: 'app-admin-chat',
  templateUrl: './admin-chat.component.html',
  styleUrls: ['./admin-chat.component.scss']
})
export class AdminChatComponent implements OnInit,OnDestroy {

  constructor(private serviceOne:CommonServiceService,private _snackBar: MatSnackBar,private router:Router) { }
 
  TextOne:string;
  
  message:string;
 
  userArray:IformGroup[]=[];
 userProfileForm= new FormGroup({
   RocketName:new FormControl(''),
   Distance:new FormControl(''),
   Date:new FormControl(''),
   time:new FormControl(''),
   EnterMembers:new FormControl(''),
 });
 
 todaydate = new Date(); 

 months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']; 

  

  ngOnInit() {
  

  }

  onSubmit( message: string, action: string){
   message="you succesfully Submitted";
   action="Ok";
  this._snackBar.open(message, action);
  this.serviceOne.updateEvent(this.userArray);
  
    this.userArray.push(this.userProfileForm.value)
    console.log(this.userArray)
    this.userProfileForm.reset();
    
  }


  receiveMessage($event) {
    this.message = $event
  }

  sendArray():void{
    
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

  ngOnDestroy(): void {
 
  }

}
