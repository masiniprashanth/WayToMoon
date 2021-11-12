import { EventEmitter, Injectable, Output } from '@angular/core';
import { CcheckPassword, Ibooking, IbookingResult, IcheckPassword, IformGroup, IformGroupAdmin,  IformGroupSignUp, IhttpServe } from '../interface/commonInterface';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  items:Ibooking[]=[];
  getCart=[];

  private FormDetails=new BehaviorSubject([]);
  currentFormDetail =this.FormDetails.asObservable();
  private signUpName=new BehaviorSubject('m');
  currentName=this.signUpName.asObservable();
  private signUpPwd= new BehaviorSubject('')
  currentPwd=this.signUpPwd.asObservable();
  private booking= new BehaviorSubject([])
  currentbooking=this.booking.asObservable();
  private bookingResult= new BehaviorSubject(0)
  currentbookingResult=this.bookingResult.asObservable();

  @Output() bookinFinal=new EventEmitter<IbookingResult[]>();
  @Output() journeyDetailEvent=new EventEmitter<IhttpServe[]>();
  @Output() adminChatEvent=new EventEmitter<string[]>();
  @Output() clientChatEvent=new EventEmitter<string[]>();
  @Output() messageEvent = new EventEmitter<IformGroup[]>();

  batchCount:number=0;
  constructor() { }

  public setEventBooking(value:IbookingResult[]){
    this.bookinFinal.emit(value)
  }

  public updateEvent(eventValue:IformGroup[]){
    this.messageEvent.emit(eventValue)
  }


  public setAdminChat(value:string[]){
    this.adminChatEvent.emit(value)
  }

  public setClienChat(value:string[]){
    this.adminChatEvent.emit(value)
  }

  public setJourneyDetailEvent(value:IhttpServe[]){
    this.journeyDetailEvent.emit(value)
  }

  public setAdminDetails(value:IformGroupAdmin[]){
    this.FormDetails.next(value)
  }

  public setBooking(value:Ibooking[]){
    this.booking.next(value)
  }

  public setSignUpDetailsName(valueOne:string):void{
      this.signUpName.next(valueOne)
  }

  public setSignUpDetailsPwd(value:string){
  this.signUpPwd.next(value)
}

  public setAmountResult(value:number){
      this.bookingResult.next(value)
  }

 

  public getEventBooking(){
    return this.bookinFinal;
  }

  public getAdminDetails():Observable<IformGroupAdmin[]>{
      return this.currentFormDetail;
  }

  public getSignUpName():Observable<string>{
    return this.currentName;
  }

  public getSignUpPwd():Observable<string>{
    return this.currentPwd;
  }

  public getBooking():Observable<Ibooking[]>{
    return this.currentbooking;
  }

  public getAmount():Observable<number>{
    return this.currentbookingResult;
  }

  public getJourneyDetailEvent(){
    return this.journeyDetailEvent;
  }

  public getAdminChat(){
    return this.adminChatEvent
  }

  public getClientChat(){
    return this.clientChatEvent
  }
 
  subscribe_updateEvent(){
    return this.messageEvent;
  }

  addToCart(value:Ibooking){
    this.items.push(value)
   this.saveCart();

  }

  removeSession(j:number){

    this.items.splice(j,1);
    this.saveCart();
  }

  saveCart(): void {
    sessionStorage.setItem('ATC', JSON.stringify(this.items)); 
  }

  loadCart(){
    this.getCart=JSON.parse(sessionStorage.getItem("ATC"));
  }

  getCartItems(){
    return this.getCart;
  }

  increaseBatchCount():number{
    this.batchCount++;
    return this.batchCount;
  }
  decreaseBatchCount():number{
    if(this.batchCount>=0){
      this.batchCount--;
      return this.batchCount;
    }
  }


}
