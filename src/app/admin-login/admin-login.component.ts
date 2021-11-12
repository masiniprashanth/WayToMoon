import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import {IformGroupAdmin } from '../common/interface/commonInterface';
import { CommonServiceService } from '../common/service/common-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  userArray:IformGroupAdmin[]=[];
  userProfileForm= new FormGroup({
    RocketName:new FormControl(''),
    Distance:new FormControl(''),
    Date:new FormControl(''),
    time:new FormControl(''),
    EnterMembers:new FormControl(''),
  });



  constructor(private PlanetServiceData:CommonServiceService,private _snackBar: MatSnackBar, private router:Router) { }


  ngOnInit() {
  }

  sendArray():void{
   
}

openSnackBar() {
}

onSubmit(message: string, action: string){
  message="you succesfully Submitted";
  action="Ok";
 this._snackBar.open(message, action);
   this.userArray.push(this.userProfileForm.value)
   this.userProfileForm.reset();
   this.PlanetServiceData.setAdminDetails(this.userArray)
 }

 Details(){
  this.router.navigate(['/journeyDetails']);
 }







ngOnDestroy() {

} 

}
