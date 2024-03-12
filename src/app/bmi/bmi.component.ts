import { Component } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})


export class BmiComponent {
  result:any
  bmiForm=new FormGroup({
    height:new FormControl("",[Validators.required,Validators.pattern(/^\d*$/)]),
    weight:new FormControl("",[Validators.required,Validators.pattern(/^\d*$/)])
  })

  // ng-pristine -form contorl value not change
  // ng-dirty - opposite of pristine, value have changed
  //ng-valid -form control valid
  //ng-invalid -form contorl invalid
  //ng-touched - if focus if bought
  //ng-untouch - if foucus not bring there

  //getter meathod- get formControlName()
  // getter meathod is used to get height and weight everywhere
  get height(){ 
    return this.bmiForm.get('height')
  }

  get weight(){
    return this.bmiForm.get('weight')
  }


  calculateBMI(){
    // let h=this.bmiForm.get('height')?.value
    // let w=this.bmiForm.get('weight')?.value
    let h:any=this.height?.value //? given if not null
    let w:any=this.weight?.value
    this.result=w/(h/100)**2
   
    
    
  }



}
