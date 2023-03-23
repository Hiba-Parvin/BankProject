import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

user:any
acno:any
today:any

constructor(private ds:DataService,private fb:FormBuilder,private router:Router){
//Accessing Data From DataService And Storing In A Variable
this.user=this.ds.currentuser
this.today=new Date()
}


ngOnInit(): void {
  if(!localStorage.getItem("currentacno")){
    alert("Please Login !")
    this.router.navigateByUrl("")
  }
}

depositForm=this.fb.group({
  acno1:['', [Validators.required, Validators.pattern('[0-9]+')]],
psw1:['', [Validators.required, Validators.pattern('[A-Za-z0-9]+')]],
amnt1:['', [Validators.required, Validators.pattern('[0-9]+')]]
})

withdrawForm=this.fb.group({
  acno2:['', [Validators.required, Validators.pattern('[0-9]+')]],
psw2:['', [Validators.required, Validators.pattern('[A-Za-z0-9]+')]],
amnt2:['', [Validators.required, Validators.pattern('[0-9]+')]]
})



deposit(){
  var acno1=this.depositForm.value.acno1
  var psw1=this.depositForm.value.psw1
  var amnt1=this.depositForm.value.amnt1
  if (this.depositForm.valid) {
  const result=this.ds.deposit(acno1,psw1,amnt1)
  if(result){
    alert(`Your Account Has Been Credited With Amount ${amnt1}.\nYour Current Balance :${result}`)
  }
  else{
    alert("Deposit Failed ! Incorrect Account Number Or Password.")
  }
  }
  else {
    alert("Invalid Form")
  }
}


withdraw(){
  var acno2=this.withdrawForm.value.acno2
  var psw2=this.withdrawForm.value.psw2
  var amnt2=this.withdrawForm.value.amnt2
  if (this.withdrawForm.valid) {
  const result=this.ds.withdraw(acno2,psw2,amnt2)
  if(result){
    alert(`Your Account Has Been Debited By Amount ${amnt2}.\nYour Current Balance :${result}`)
  }
  else{
    alert("Withdraw Failed ! Incorrect Account Number Or Password.")
  }
}

else {
  alert("Invalid Form")
}

}

logout(){
  localStorage.removeItem("currentuser")
  localStorage.removeItem("currentacno")
  this.router.navigateByUrl("")
}

delete(){
  this.acno=JSON.parse(localStorage.getItem("currentacno") || " ")
}

cancelChild(){
  this.acno=""
}

}