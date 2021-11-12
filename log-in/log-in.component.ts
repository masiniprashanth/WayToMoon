import { Component, OnDestroy, OnInit ,ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from '../common/service/common-service.service';
import { Subscription } from 'rxjs'
import { CcheckPassword, IcheckPassword, IformGroupAdmin } from '../common/interface/commonInterface';
import { SignUpComponent} from '../sign-up/sign-up.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit,OnDestroy {

  userName:string="";
  password:string="";
  Subscription:Subscription;
  Subscription1:Subscription;
  sndArray:IformGroupAdmin[];
  checkName:string;
  checkPassword:string;
  checkLog:CcheckPassword;
  message:string;

  logIn=new FormGroup({
    Name:new FormControl('',[Validators.required]),
    Formpassword:new FormControl('')
  })
  

  constructor(private router:Router,private serviceOne:CommonServiceService, private _snackBar: MatSnackBar) { }
  

  ngOnInit() {
    // this.Subscription=this.serviceOne.subscribe_SignArr().subscribe(value=>{this.signUpValue=value;});
        this.Subscription=this.serviceOne.getSignUpName().subscribe(value=>{this.checkName=value})
        // this.Subscription1=this.serviceOne.getSignUpPwd().subscribe(value=>{this.checkPassword=value})
    
  }


  NewAccount(){
    this.router.navigate(['/signUp']);
  }

  adminLogIn(){
    this.router.navigate(['/adminLogIn']);
  }


  openSnackBar(message: string, action: string) {

    console.log(this.checkName)
    if(this.logIn.value.Name=="masini"&&this.logIn.value.Formpassword=="123"){
      this.router.navigate(['/adminLogIn']);
      message="you Log in to Admin";
    action="Ok";
   this._snackBar.open(message, action);   
    }
    else if(this.logIn.value.Name==this.checkName){
      this.router.navigate(['/gallery']);
      message="WelCome log in to user";
      action="Ok";
     this._snackBar.open(message, action); 
     console.log(this.checkName)
    }
    else{
      message="Invalid UserName";
      action="Ok";
     this._snackBar.open(message, action);
    }
 
   
   console.log(this.sndArray)

   
 }

  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }
}
