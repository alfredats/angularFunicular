import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'day38';

  @ViewChild(MatDrawer)
  drawer!: MatDrawer;


  ngOnInit(): void {
  }

  toggleSidebar() {
    this.drawer.toggle();
  }
}
