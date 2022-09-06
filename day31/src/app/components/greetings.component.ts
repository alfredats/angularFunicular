import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {

  @Input()
  name! : string;

  greetingsStyle = {'red-font': false, 'blue-font': false};


  constructor() { 
    console.log("1) Hello, ", name);
  }

  ngOnInit(): void {
    console.log("2) Hello, ", this.name);
    if (this.name.length % 2 === 0) {
      this.greetingsStyle['red-font'] = true;
    } else {
      this.greetingsStyle['blue-font'] = true;
    }
  }

}
