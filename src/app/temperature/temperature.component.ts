import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {
  tempertureInC:any
  tempertureInFh:any
  convertToDegree(){
    this.tempertureInC=(this.tempertureInFh-32)*(5/9)

  }
  convertToFh(){
    this.tempertureInFh=this.tempertureInC*(9/5)+32
  }

}
