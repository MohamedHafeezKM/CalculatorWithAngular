import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export class AppComponent {
//   title = 'Calculator'
// }
export class AppComponent {
  title = 'Calculator';
  name:string ='Hafeez'
  age:number=24
  degree:string='B.sc Physics'
  currentDate:any        //unknowing data type
  currentTime:any
  checkresult:any
  sayHello(){
      console.log('Hi there');
      
  }
  
  showDate(){
    this.currentDate=new Date().toDateString()  //to get current date
  }
  showTime(){
    this.currentTime=new Date().toLocaleTimeString()
  }

  checkNum(varaiable:any){
    let num=+varaiable.value

    if(num>0){
      this.checkresult='+ve';
      
    }
    else if(num<0){
      this.checkresult='-ve';
      
    }
    else{
      this.checkresult='zero';
      
    }
    }

}
