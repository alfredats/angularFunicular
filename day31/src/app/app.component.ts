import { Component } from '@angular/core';
import { RegistrationComponent } from './components/registration.component';
import { Registration } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day31';
  globalName = "fred"
  nameArr = ["wilma", "betty", "bambam"]

  defaultRegistration : Registration = {
    name: 'betty',
    email: 'betty@gmail.com',
    gender: 'f',
    newsletter: true,
  }

  newRegistration(reg: Registration) {
    console.info(">>>> new Registration: ", reg)
  }
}
