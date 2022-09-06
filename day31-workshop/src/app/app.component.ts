import { Component } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day31-workshop';

  itemCart : Map<string, Item> = new Map<string, Item>(); 
  itemCartSize : number = this.itemCart.size;  

  addItem(i: Item): void {
    if (this.itemCart.has(i.name)) {
      window.alert("Item already exists in cart");
      return;
    } 
    this.itemCart.set(i.name, i);
    this.itemCartSize = this.itemCart.size;
  }

  removeItem(i: Item): void {
    this.itemCart.delete(i.name);
    this.itemCartSize = this.itemCart.size;
  }

}
