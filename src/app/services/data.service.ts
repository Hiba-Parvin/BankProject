import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  currentuser: any
  userDetails: any = {
    1000: { username: "Rhysand", accno: 1001, password: "abc@123", balance: 0 },
    1002: { username: "Amren", accno: 1002, password: "abc@123", balance: 0 },
    1003: { username: "Cassian", accno: 1003, password: "abc@123", balance: 0 },
    1004: { username: "Azriel", accno: 1004, password: "abc@123", balance: 0 },
    1005: { username: "Lyssandra", accno: 1005, password: "abc@123", balance: 0 },
    1006: { username: "Yrene", accno: 1006, password: "abc@123", balance: 0 },
  }

  register(accno: any, uname: any, psw: any) {
    var userDetails = this.userDetails
    if (accno in userDetails) {
      return false
    }
    else {
      userDetails[accno] = { username: uname, accno, password: psw, balance: 0 }
      console.log(userDetails);

      return true
    }
  }

  login(accno: any, psw: any) {
    var userDetails = this.userDetails
    if (accno in userDetails) {
      if (psw == userDetails[accno].password) {
        //Storing Current User
        this.currentuser = userDetails[accno]["username"]
        return true
      }
      else {
        return false
      }

    }
    else {
      return false
    }
  }

  deposit(acno1:any,psw1:any,amnt1:any){
    var amount=parseInt(amnt1)
    var userDetails=this.userDetails

    if(acno1 in userDetails){
      if(psw1==userDetails[acno1]["password"])
      {
        userDetails[acno1]["balance"]+=amount
        console.log("Deposit : ",userDetails[acno1]["balance"]);
        return userDetails[acno1]["balance"]
      }
      else
      {
        return false
      }
    }
    else{
      return false
    }
  }

  
  withdraw(acno2:any,psw2:any,amnt2:any){
    var amount=parseInt(amnt2)
    var userDetails=this.userDetails

    if(acno2 in userDetails){
      if(psw2==userDetails[acno2]["password"])
      {
        if(userDetails[acno2]["balance"]>=amount)
        {
        userDetails[acno2]["balance"]-=amount
        console.log("Withdraw : ",userDetails[acno2]["balance"]);
        return userDetails[acno2]["balance"]
        }
        else
        {
          alert("Insufficient Balance !!!")
        }
      }
      else
      {
        return false
      }
    }
    else{
      return false
    }
  }

}
