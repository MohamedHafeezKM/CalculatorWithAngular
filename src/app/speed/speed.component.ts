import { Component } from '@angular/core';

@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.css']
})
export class SpeedComponent {
  kmH:any
  mS:any
  convertToKmH(){
    this.kmH=this.mS*3.6
  }
  convertToMS(){
    this.mS=this.kmH/3.6
  }


}
