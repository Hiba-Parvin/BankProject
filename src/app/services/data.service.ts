import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    this.getDetails()
   }
  currentuser: any
  currentacno: any

  userDetails:any

  // userDetails: any = {
  //   1001: { username: "Rhysand", accno: 1001, password: "abc", balance: 0, transaction: [] },
  //   1002: { username: "Amren", accno: 1002, password: "abc", balance: 0, transaction: [] },
  //   1003: { username: "Cassian", accno: 1003, password: "abc", balance: 0, transaction: [] },
  //   1004: { username: "Azriel", accno: 1004, password: "abc", balance: 0, transaction: [] },
  //   1005: { username: "Lyssandra", accno: 1005, password: "abc", balance: 0, transaction: [] },
  //   1006: { username: "Yrene", accno: 1006, password: "abc", balance: 0, transaction: [] },
  // }

  saveDetails() {
    if (this.userDetails) {
      localStorage.setItem("userDetails", JSON.stringify(this.userDetails))
    }
    if (this.currentuser) {
      localStorage.setItem("currentuser", this.currentuser)
    }
    if (this.currentacno) {
      localStorage.setItem("currentacno", JSON.stringify(this.currentacno))
    }
  }

  getDetails() {
    if(localStorage.getItem("userDetails")){
     this.userDetails=JSON.parse(localStorage.getItem("userDetails") || " ")
     //not sure if we will get the data, so inorder to avoid error we have to give empty string " " in OR Condition
    }
    if(localStorage.getItem("currentuser")){
      this.currentuser=localStorage.getItem("currentuser")
     }
     if(localStorage.getItem("currentacno")){
      this.currentacno=JSON.parse(localStorage.getItem("currentacno") || " ")
     }
  }

  register(accno: any, uname: any, psw: any) {
    var userDetails = this.userDetails
    if (accno in userDetails) {
      return false
    }
    else {
      userDetails[accno] = { username: uname, accno, password: psw, balance: 0, transaction: [] }
      console.log(userDetails);
      this.saveDetails()
      return true
    }
  }

  login(accno: any, psw: any) {
    var userDetails = this.userDetails
    if (accno in userDetails) {
      if (psw == userDetails[accno].password) {
        //Storing Current User
        this.currentuser = userDetails[accno]["username"]
        this.currentacno = accno
        this.saveDetails()
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

  deposit(acno1: any, psw1: any, amnt1: any) {
    var amount = parseInt(amnt1)
    var userDetails = this.userDetails

    if (acno1 in userDetails) {
      if (psw1 == userDetails[acno1]["password"]) {
        userDetails[acno1]["balance"] += amount
        console.log("Deposit : ", userDetails[acno1]["balance"]);

        // Add Transaction Data
        userDetails[acno1]["transaction"].push({
          Type: "Credit",
          Amount: amount
        })
        this.saveDetails()
        console.log("Deposit : ", userDetails[acno1]);
        return userDetails[acno1]["balance"]
      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }


  withdraw(acno2: any, psw2: any, amnt2: any) {
    var amount = parseInt(amnt2)
    var userDetails = this.userDetails

    if (acno2 in userDetails) {
      if (psw2 == userDetails[acno2]["password"]) {
        if (userDetails[acno2]["balance"] >= amount) {
          userDetails[acno2]["balance"] -= amount
          console.log("Withdraw : ", userDetails[acno2]["balance"]);
          // Add Transaction Data
          userDetails[acno2]["transaction"].push({
            Type: "Debit",
            Amount: amount
          })
          this.saveDetails()
          console.log("Withdraw : ", userDetails[acno2]);
          return userDetails[acno2]["balance"]
        }
        else {
          alert("Insufficient Balance !!!")
        }
      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }

  getTransaction(acno: any) {

    return this.userDetails[acno]["transaction"]

  }
}
