import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day30';
  count = 0;
  imageClicked(image: string) {
    console.info(">>>> App.component: " + image); 
    this.count++;
  }
}
