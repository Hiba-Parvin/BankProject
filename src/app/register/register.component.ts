import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
accno:any
psw:any
uname:any
  
  constructor(private ds:DataService){}

  ngOnInit():void{

  }

  register(){
var accno=this.accno
var psw=this.psw
var uname=this.uname
const result=this.ds.register(accno,uname,psw)
if(result){
alert("Registeration Successfull !")
}
else{
  alert("Account Already Exist !")
}
  }

}
