import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

//Create global header for overload header
const option={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http:HttpClient) {
    // this.getDetails()
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


getToken(){
  //Accessing Token
  const token=JSON.parse(localStorage.getItem("token") || "")
  //Generate header
  let headers=new HttpHeaders()
  //check if token is accessed or not
  if(token){
    //add token to headers using append method
    option.headers=headers.append('access_token',token)
  }
  return option
}
 

  register(accno: any, uname: any, psw: any) {
const data={acno:accno,uname,psw}
return this.http.post('http://localhost:3000/register',data)
  }

  login(accno: any, psw: any) {
const data={acno:accno,psw}
return this.http.post('http://localhost:3000/login',data)
  }

  deposit(acno1: any, psw1: any, amnt1: any) {
    const data={acno:acno1,psw:psw1,amnt:amnt1}
    return this.http.post('http://localhost:3000/deposit',data,this.getToken())
  }


  withdraw(acno2: any, psw2: any, amnt2: any) {
    const data={acno:acno2,psw:psw2,amnt:amnt2}
    return this.http.post('http://localhost:3000/withdraw',data,this.getToken())
  }

  getTransaction(acno: any) {
    const data={acno}
    return this.http.post('http://localhost:3000/transaction',data,this.getToken())
  }

  deleteAcc(acno:any){
    return this.http.delete('http://localhost:3000/delete/'+acno,this.getToken())
  }
}
