import { Component } from '@angular/core';

@Component({
  selector: 'app-leap-year',
  templateUrl: './leap-year.component.html',
  styleUrls: ['./leap-year.component.css']
})
export class LeapYearComponent {
  result:string=''
  checkYear(inpbox:any){
    let year=+inpbox.value

    if(year%100==0 && year%400==0 || year%100!=0 && year%4==0){
      this.result=`<div class='text-success'>This year is a leap year</div>`
    }
    else{
      this.result=`<div class='text-danger'>This year not a leap year</div>`
    }
  }

}
