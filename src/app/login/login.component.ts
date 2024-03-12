import { Component } from '@angular/core';
import { FormControl,FormGroup,Validator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm=new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  })

  logIn(){
    console.log(this.loginForm.value);
    
  }

}
