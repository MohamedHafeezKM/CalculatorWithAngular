import { Component } from '@angular/core';

@Component({
  selector: 'app-digital-storage',
  templateUrl: './digital-storage.component.html',
  styleUrls: ['./digital-storage.component.css']
})
export class DigitalStorageComponent {
  bytes:any
  kilobyte:any
  convertToKilobyte(){
    this.kilobyte=this.bytes/1000
  }
  convertToByte(){
    this.bytes=this.kilobyte*1000
  }

  


}
