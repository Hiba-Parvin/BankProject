import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  userDetails: any = {
    1000: { username: "Rhysand", accno: 1001, password: "abc@123", balance: 0 },
    1002: { username: "Amren", accno: 1002, password: "abc@123", balance: 0 },
    1003: { username: "Cassian", accno: 1003, password: "abc@123", balance: 0 },
    1004: { username: "Azriel", accno: 1004, password: "abc@123", balance: 0 },
    1005: { username: "Lyssandra", accno: 1005, password: "abc@123", balance: 0 },
    1006: { username: "Yrene", accno: 1006, password: "abc@123", balance: 0 },
  }

  register(accno:any,uname:any,psw:any){
  var userDetails=this.userDetails
  if(accno in userDetails){
    return false
  }
  else{
    userDetails[accno]={username:uname,accno,password:psw,balance:0}
    console.log(userDetails);
    
    return true
  }
  }
}
