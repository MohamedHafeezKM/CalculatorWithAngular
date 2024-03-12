import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiComponent } from './bmi/bmi.component';
import { EmiComponent } from './emi/emi.component';
import { AdditionComponent } from './addition/addition.component';
import { AnagramComponent } from './anagram/anagram.component';
import { DigitalStorageComponent } from './digital-storage/digital-storage.component';
import { LeapYearComponent } from './leap-year/leap-year.component';
import { LengthComponent } from './length/length.component';
import { LoginComponent } from './login/login.component';
import { PrimeNoComponent } from './prime-no/prime-no.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SpeedComponent } from './speed/speed.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { TemperatureComponent } from './temperature/temperature.component';

const routes: Routes = [
  {path:'bmi/page',component:BmiComponent},
  {path:'emi',component:EmiComponent},
  {path:'addition',component:AdditionComponent},
  {path:'anagram',component:AnagramComponent},
  {path:'digital-storage',component:DigitalStorageComponent},
  {path:'leap-year',component:LeapYearComponent},
  {path:'length',component:LengthComponent},
  {path:'login',component:LoginComponent},
  {path:'prime-no',component:PrimeNoComponent},
  {path:'register-user',component:RegisterUserComponent},
  {path:'speed',component:SpeedComponent},
  {path:'subtraction',component:SubtractionComponent},
  {path:'temperture',component:TemperatureComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
