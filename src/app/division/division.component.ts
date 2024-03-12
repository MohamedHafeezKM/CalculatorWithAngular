import { Component } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent {
  num1:number=0
  num2:number=0
  result:number=0

  performDivision(){
    this.result=this.num1/this.num2
  }

}
