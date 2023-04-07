import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  //Model For Register Form
  registerForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    uname: ['', [Validators.required, Validators.pattern('[A-Za-z]+')]]
  })

  ngOnInit(): void {

  }

  register() {
    var acno = this.registerForm.value.acno
    var psw = this.registerForm.value.psw
    var uname = this.registerForm.value.uname
    if (this.registerForm.valid) {
      this.ds.register(acno, uname, psw).subscribe((result: any) => {
        alert(result.message)
        this.router.navigateByUrl("")
      },
      result=>{
        alert(result.error.message) 
      })
      //   if (result) {
      //     this.router.navigateByUrl("")
      //     alert("Registeration Successfull !")
      //   }
        // else {
        //   alert("Account Already Exist !")
        // }
      }
      else {
        alert("Invalid Form !")
      }
    }
  }
