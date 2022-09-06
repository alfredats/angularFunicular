import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day30-workshop';
  startingNum = Math.floor(Math.random() * 31);
  cardArr : string[] = [];
  
  cardSelected(image : string) {
    console.log(">>> image added: "+ image);
    this.cardArr.push(image);
  }
}
