import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input() item:String|undefined

  //Event Creation
  @Output() onCancel=new EventEmitter()

  constructor(){}
  ngOnInit(): void {
    
  }
  cancel(){
    this.onCancel.emit()

  }

}
