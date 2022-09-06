import { Component, OnInit, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  @Input()
  set current(n: number) {
    console.log(">>>> set: ", n);
    this._current = n;
  }
  
  get current() {
    return this._current;
  }

  private _current = 0;

  @Output()
  selectedCard = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onNext() {
    this._current = (this._current + 1) % 30 ;
  }

  onPrev() {
    this._current = (this._current< 0) ? 31 + this._current: this._current %= 30;
  }

  onSelect() {
    this.selectedCard.next("/assets/numbers/number" + this._current + ".jpg");
  }

}
