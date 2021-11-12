import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {  IformGroupAdmin } from '../common/interface/commonInterface';
import { CommonServiceService } from '../common/service/common-service.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  Name:string="";
  password:string='';
  message:string="hi";
  signupDetails:IformGroupAdmin[]=[];
  firstName:string="";
  lastName:string="";

  
 

  constructor(private router:Router, private serviceOne:CommonServiceService) { }

  ngOnInit() {
    
  }

  backLog(){
    this.router.navigate(['/logIn']);
  }

  sendArr(){

  
  }

  sendName(){
    this.Name=this.firstName+this.lastName;
    this.serviceOne.setSignUpDetailsName(this.Name)
  }

  
  

}
