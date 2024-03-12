import { Component } from '@angular/core';

@Component({
  selector: 'app-prime-no',
  templateUrl: './prime-no.component.html',
  styleUrls: ['./prime-no.component.css']
})
export class PrimeNoComponent {
  result:string=''
  checkPrime(inpbox:any){
    let num=+inpbox.value
     
    var isPrime=true
    for(let i=2;i<num;i++){
      if(num%i==0){
       isPrime=false
       break
      }
    }
    if(isPrime==true){
      this.result='This number is a prime number'
    }
    else if(isPrime==false){
      this.result='This number is not a prime number'
    }
  }

}
