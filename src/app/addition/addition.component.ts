import { Component } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {
    result:number=0
  performAddition(inpbox1:any,inpbox2:any){
    let num1=+inpbox1.value
    let num2=+inpbox2.value
    this.result=num1+num2
   
    

  }

}
