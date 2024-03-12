import { Component } from '@angular/core';
import {FormGroup,FormControl,Validator} from '@angular/forms'

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  registerForm=new FormGroup({
    username:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),

  })

  signUp(){
    console.log(this.registerForm.value);
    
  }

}
