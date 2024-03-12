import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PrimeNoComponent } from './prime-no/prime-no.component';
import { LeapYearComponent } from './leap-year/leap-year.component';
import { AnagramComponent } from './anagram/anagram.component';
import { DivisionComponent } from './division/division.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { DigitalStorageComponent } from './digital-storage/digital-storage.component';
import { SpeedComponent } from './speed/speed.component';
import { LengthComponent } from './length/length.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginComponent } from './login/login.component';
import { BmiComponent } from './bmi/bmi.component';
import { EmiComponent } from './emi/emi.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    SubtractionComponent,
    PrimeNoComponent,
    LeapYearComponent,
    AnagramComponent,
    DivisionComponent,
    TemperatureComponent,
    DigitalStorageComponent,
    SpeedComponent,
    LengthComponent,
    RegisterUserComponent,
    LoginComponent,
    BmiComponent,
    EmiComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
