import { HttpErrorResponse } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { IformGroupAdmin, IhttpServe } from '../common/interface/commonInterface';
import { CommonServiceService } from '../common/service/common-service.service';
import { HttpServeService } from '../common/service/http-serve.service';

@Component({
  selector: 'app-journey-details',
  templateUrl: './journey-details.component.html',
  styleUrls: ['./journey-details.component.scss']
})
export class JourneyDetailsComponent implements OnInit,OnDestroy {

  subscription:Subscription;
  
  subscription1:Subscription;
  getHttp:IhttpServe[]=[];
  getHttpevent:IhttpServe[]=[];
  journeyDetails:IformGroupAdmin[]=[];
  data:any;
  getHttpvalue:any;
  
  displayedColumns: string[] = ['No','RocketName', 'Distance', 'Date', 'time' ,'EnterMembers'];
  dataSource = new MatTableDataSource(this.journeyDetails);

  //table http
  displayedColumnsone:string[]=['id','email','first_name','avatar']
  dataSourceOne=new MatTableDataSource<IhttpServe>()
 
  
  constructor(private serviceOne:CommonServiceService, private http:HttpServeService) { }

  ngOnInit() {
    this.subscription=this.serviceOne.getAdminDetails().subscribe(value=>{this.journeyDetails=value,this.dataSource.data=this.journeyDetails,  console.log(this.journeyDetails)})
    this.subscription1=this.serviceOne.getJourneyDetailEvent().subscribe(value=>{this.getHttpevent=value;})
    
  }
  Details(){
    console.log(this.journeyDetails)
  }

  showDetail(){
      // this.EnableProgressDialog();
      var aData=this.http.GetEmployeeDetails();
      // var aData = this.http.GetEmployeeDetails();
      aData.then((aResultData) => { this.getHttpvalue=aResultData.data;
        this.serviceOne.setJourneyDetailEvent(this.getHttpvalue)
      },(err:HttpErrorResponse)=>{
        console.log(err);
      });
      this.dataSourceOne=new MatTableDataSource<IhttpServe>(this.getHttpevent)
      console.log( aData)
      this.data=aData;
      
   
      
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.subscription1.unsubscribe();
  }

}
