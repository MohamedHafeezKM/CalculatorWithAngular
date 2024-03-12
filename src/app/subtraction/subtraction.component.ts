import { Component } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent {
  result:number=0

  performSubtraction(inpbox1:any,inpbox2:any){
    let num1=+inpbox1.value
    let num2=+inpbox2.value
    this.result=num2-num1
    
    
  }

}
