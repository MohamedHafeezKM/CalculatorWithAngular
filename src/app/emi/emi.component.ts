import { Component } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent {
  results:any
  totalPayments:any
  totalInterestPayables:any
  psummary:any
  isummary:any
  emiForm=new FormGroup({
    tenure:new FormControl('',[Validators.required,Validators.pattern(/^(\d+(\.\d*)?|\.\d+)$/)]),
    amount:new FormControl('',[Validators.required,Validators.pattern(/^(\d+(\.\d*)?|\.\d+)$/)]),
    interest:new FormControl('',[Validators.required,Validators.pattern(/^(\d+(\.\d*)?|\.\d+)$/)]),
  
  })

  get amount(){
    return this.emiForm.get('amount')
  }
  get tenure(){
    return this.emiForm.get('tenure')
  }
  get interest(){
    return this.emiForm.get('interest')
  }

  calculateEmi(){
    console.log(this.emiForm.value);
    let p:any=this.amount?.value
    let i:any=this.interest?.value
    let t:any=this.tenure?.value
    let r:any=i/12
    let h:any=r/100
    let n:any=t*12
    let onePlusPower=(h+1)**n

    let result=(p*h*onePlusPower)/(onePlusPower-1)
    this.results=Math.round(result)
    let totalPayment=result*n
    this.totalPayments=Math.round(totalPayment)
    let totalInterestPayable=totalPayment-p
    this.totalInterestPayables=Math.round(totalInterestPayable)

    this.psummary=((p/totalPayment)*100).toFixed(1)
    this.isummary=((totalInterestPayable/totalPayment)*100).toFixed(1)
    
  }
}
