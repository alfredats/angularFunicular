import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnChanges, OnInit {

  @Input()
  cart!: Map<String, Item>;
  
  @Input()
  cartSize! : number;
  total!: number;

  @Output()
  onItemRemove = new Subject<Item>();

  constructor() { }

  ngOnInit(): void {
    this.updateTotal(this.cart);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(">>> changes: ", changes);
    this.updateTotal(this.cart);
  }

  private updateTotal(cart: Map<String,Item>) {
    this.total = 0;
    cart.forEach((i : Item) => {
      const numQuantity = Number(i.quantity);
      const numUnitPrice = Number(i.unitPrice);
      this.total += (numQuantity * numUnitPrice);
    });
    console.log(">>> total: ", this.total);
  }

  onCancel(i: Item) {
    this.onItemRemove.next(i);
  }

}
