import { Component } from '@angular/core';

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.css']
})
export class LengthComponent {
  m:any
  cM:any
  convertocM(){
    this.cM=this.m*100

  }
  convertTom(){
    this.m=this.cM/100
  }

}
