import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data = "Your Perfect Banking Partner" //Example For String Interpolation
  data1 = "Enter Your Account No :" //Example For Property Binding

  accno: any
  pass: any
  // or accno="" Declaring variable to store value from $Event Binding Method

  userDetails: any = {
    1000: { username: "Rhysand", accno: 1001, password: "abc@123", balance: 0 },
    1002: { username: "Amren", accno: 1002, password: "abc@123", balance: 0 },
    1003: { username: "Cassian", accno: 1003, password: "abc@123", balance: 0 },
    1004: { username: "Azriel", accno: 1004, password: "abc@123", balance: 0 },
    1005: { username: "Lyssandra", accno: 1005, password: "abc@123", balance: 0 },
    1006: { username: "Yrene", accno: 1006, password: "abc@123", balance: 0 },
  }

  constructor() { }

  ngOnInit(): void {

  }

  //methods


  login(){
    var accnum=this.accno
    var pass=this.pass
    var userDetails=this.userDetails
    if(accnum in this.userDetails){
      if(pass==this.userDetails[accnum]["password"])
      {
        alert('Login Successfull')
      }
      else{
        alert('Incorrect Password')
      }
    }

    else{
      alert('Not Registered Account !')
    }
  }


  //$Event Binding Method
  // accnoChange(event:any){
  //   console.log(event.target.value);
  //   this.accno=event.target.value
  // }

  // passChange(event:any){
  //   console.log(event.target.value);
  //   this.pass=event.target.value
  // }

//Event Binding With Template Rendering Variable
  // login(accno: any, pass: any) {
  //   console.log(accno.value, pass.value);
  //   var accnum = accno.value
  //   var pass = pass.value
  //   if (accnum in this.userDetails) {
  //     if (pass == this.userDetails[accnum]["password"]) {
  //       alert('Login Successfull')
  //     }
  //     else {
  //       alert('Incorrect Password')
  //     }
  //   }

  //   else {
  //     alert('Not Registered Account !')
  //   }
  // }


}
