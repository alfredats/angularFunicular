import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ordersDB } from '../models';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  ordersDB = ordersDB;

  @Output()
  orderIDToUpdate = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendForUpdate(orderID: string) {
    this.orderIDToUpdate.next(orderID);
  }

}
