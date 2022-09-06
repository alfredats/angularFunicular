import { Component, OnInit, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input() 
  image = "/assets/cock.jpg"

  @Input() 
  caption = "nice cock"

  addToCart=true

  fontSize="2rem"
  
  private count = 0;

  @Output()
  onImageClicked = new Subject<string>()

  constructor() { }

  ngOnInit(): void {
  }

  cursorInImage() {
    console.info('cursor is in the image');
    this.fontSize="5rem"
    this.addToCart=false
  }

  cursorOutImage() {
    console.info('cursor out of the image');
    this.fontSize="2rem"
    this.addToCart=true
  }

  onClick() {
    this.count = (this.count + 1) % 2;
    this.caption = this.count === 0 ? "nice dog" : "nice cock";
    this.image = this.count === 0 ? "/assets/dog.jpeg" : "/assets/cock.jpg";
    this.onImageClicked.next(this.image);
    window.alert("This button was clicked " + this.count + " times" ); }
}
