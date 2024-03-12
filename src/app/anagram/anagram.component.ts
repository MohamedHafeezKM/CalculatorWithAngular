import { Component } from '@angular/core';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css']
})
export class AnagramComponent {
  result:string=''
  checkAnagram(inpbox:any){
    let num=+inpbox.value
    let original=num
    let numlen=String(num).length
    let sum=0

    while(num!=0){
      let digit=num%10
      let exp=digit**numlen
      sum+=exp
      num=Math.floor(num/10)

    }
    this.result=sum==original?`${original} is an armstorng number`:`${original} is not an armstorng number`
  }

}
