import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'day36';
  paths = ['', '/cat', '/dog'];

  constructor(private router: Router) {}

  clicked() {
    console.log('>>> clicked');
    const i = Math.floor(Math.random() * 3);
    this.router.navigate([this.paths[i]]);
  }
}
