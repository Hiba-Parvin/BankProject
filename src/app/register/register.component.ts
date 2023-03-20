import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  accno: any
  psw: any
  uname: any

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  //Model For Register Form
  registerForm = this.fb.group({
    acno: [''],
    psw: [''],
    uname: ['']
  })


  ngOnInit(): void {

  }

  register() {
    var accno = this.registerForm.value.acno
    var psw = this.registerForm.value.psw
    var uname = this.registerForm.value.uname
    const result = this.ds.register(accno, uname, psw)
    if (result) {
      this.router.navigateByUrl("")
      alert("Registeration Successfull !")
    }
    else {
      alert("Account Already Exist !")
    }
  }

}
