import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Registration } from '../models'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regForm!: FormGroup

  @Input()
  registration!: Registration  

  @Output()
  onNewRegistration: Subject<Registration> = new Subject<Registration>(); 

  // Using constructur-based dependency injection
  constructor(private fb: FormBuilder) { 
    // using modifiers within the constructor params automatically 
    // defines class members 
    // - public s : string, private num : number
    // see https://angular.io/guide/dependency-injection-in-action for info
  }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      name: this.fb.control(this.registration?.name, [ Validators.required, Validators.minLength(3)]),
      email: this.fb.control(this.registration?.email, [ Validators.required, Validators.email ]),
      gender: this.fb.control(this.registration?.gender),
      newsletter: this.fb.control(this.registration?.newsletter),
    });
  }

  processForm() {
    // console.log(`form: `, this.regForm.value);
    console.log("Submit button clicked")
    // const req : Registration = {
    //   name: this.regForm.value.name,
    //   email: this.regForm.value.email,
    //   gender: this.regForm.value.gender,
    //   newsletter: this.regForm.value.newsletter,
    // }
    const req : Registration = this.regForm.value as Registration;
    this.onNewRegistration.next(req);
  }

}
