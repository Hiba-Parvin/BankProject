import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  currentuser: any
  currentacno: any

  userDetails: any = {
    1000: { username: "Rhysand", accno: 1001, password: "abc", balance: 0, transaction: [] },
    1002: { username: "Amren", accno: 1002, password: "abc", balance: 0, transaction: [] },
    1003: { username: "Cassian", accno: 1003, password: "abc", balance: 0, transaction: [] },
    1004: { username: "Azriel", accno: 1004, password: "abc", balance: 0, transaction: [] },
    1005: { username: "Lyssandra", accno: 1005, password: "abc", balance: 0, transaction: [] },
    1006: { username: "Yrene", accno: 1006, password: "abc", balance: 0, transaction: [] },
  }

  register(accno: any, uname: any, psw: any) {
    var userDetails = this.userDetails
    if (accno in userDetails) {
      return false
    }
    else {
      userDetails[accno] = { username: uname, accno, password: psw, balance: 0, transaction: [] }
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
        this.currentacno=accno
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
