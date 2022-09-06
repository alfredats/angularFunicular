import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  cards!: string[];

  hover!: Boolean;

  constructor() {}

  ngOnInit(): void {
    this.hover = false;
  }

  hoverIn() {
    console.log(' >>> hover in');
    this.hover = true;
  }

  hoverOut() {
    console.log(' >>> hover out');
    this.hover = false;
  }
}
