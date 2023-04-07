import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit{
transactionArray:any
  constructor(private ds:DataService){
  this.ds.getTransaction(JSON.parse(localStorage.getItem("currentacno") || "")).subscribe((result:any)=>{
    this.transactionArray=result.transaction
  })
  }

  ngOnInit(): void {
    
  }

}