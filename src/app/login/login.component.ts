import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  data = "Your Perfect Banking Partner" //Example For String Interpolation
  data1 = "Enter Your Account No :" //Example For Property Binding

  // accno: any
  // pass: any
  // userDetails: any;
  // or accno="" Declaring variable to store value from $Event Binding Method

  // userDetails: any = {
  //   1000: { username: "Rhysand", accno: 1001, password: "abc@123", balance: 0 },
  //   1002: { username: "Amren", accno: 1002, password: "abc@123", balance: 0 },
  //   1003: { username: "Cassian", accno: 1003, password: "abc@123", balance: 0 },
  //   1004: { username: "Azriel", accno: 1004, password: "abc@123", balance: 0 },
  //   1005: { username: "Lyssandra", accno: 1005, password: "abc@123", balance: 0 },
  //   1006: { username: "Yrene", accno: 1006, password: "abc@123", balance: 0 },
  // }


  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]+')]]
  })
  //methods


  login() {
    var accnum = this.loginForm.value.acno
    var pass = this.loginForm.value.psw
    if (this.loginForm.valid) {
      const result = this.ds.login(accnum, pass)

      if (result) {
        this.router.navigateByUrl("dashboard")
        alert("Login Successfull")
      }
      else {
        alert("Login Failed")
      }
    }
    else {
      alert("Invalid Form")
    }

    // var userDetails=this.userDetails
    // var userDetails=this.ds.userDetails

    // if(accnum in this.userDetails){
    //   if(pass==this.userDetails[accnum]["password"])
    //   {
    //     alert('Login Successfull')
    //     //Redirection
    //     this.router.navigateByUrl('dashboard')
    //   }
    //   else{
    //     alert('Incorrect Password')
    //   }
    // }

    // else{
    //   alert('Not Registered Account !')
    // }
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
