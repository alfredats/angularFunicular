import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order, ordersDB } from '../models';
import { stringify, v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnChanges, OnInit {

  @Input()
  update?: string ;

  form!: FormGroup;
  itemsFormArray!: FormArray

  get invalid() {
    return this.form.invalid;
  }

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['update'].currentValue !== undefined) {
      this.form = this.makeForm(changes['update'].currentValue);
    }
  }

  ngOnInit(): void {
    this.form = this.makeForm();
  }

  makeForm(orderID: string | null = null) {
    if (orderID === null || ordersDB.get(orderID!) === undefined) {
      this.itemsFormArray = this.fb.array([]);
      return this.fb.group({
          uuid: this.fb.control<string>(uuidv4().substring(0,8), [ Validators.required, Validators.pattern(/^[A-Za-z0-9]{8}$/)]),
          name: this.fb.control<string>('', [ Validators.required, Validators.minLength(3)]),
          mobile: this.fb.control<string>('', [ Validators.required, Validators.pattern(/^([0-9]*)$/)]),
          items: this.itemsFormArray
      });
    }

    const order = ordersDB.get(orderID)!;
    let uuid = order.uuid;
    let name = order.name;
    let mobile = order!.mobile;
    this.itemsFormArray = this.fb.array([]);
    order!.items.forEach((obj) => {
      this.addItem(obj);
    })
    return this.fb.group({
        uuid: this.fb.control<string>(uuid, [ Validators.required, Validators.pattern(/^[A-Za-z0-9]{8}$/)]),
        name: this.fb.control<string>(name, [ Validators.required, Validators.minLength(3)]),
        mobile: this.fb.control<string>(mobile, [ Validators.required, Validators.pattern(/^([0-9]*)$/)]),
        items: this.itemsFormArray
    });
  }

  processForm(): void {
    console.log(this.form.value);
    const currOrder = this.form.value as Order;
    ordersDB.set(currOrder.uuid, currOrder);
    this.form = this.makeForm(null);
  }

  addItem(itemObj: {item: string,  quantity: number} = {item: '', quantity: 1}): FormGroup {
    return this.fb.group({
      item: this.fb.control<string>(itemObj.item, [ Validators.required, Validators.minLength(3)]),
      quantity: this.fb.control<number>(itemObj.quantity, [Validators.required, Validators.min(1) ])
    });
  }
  
  removeItem(idx: number): void {
    this.itemsFormArray.removeAt(idx);
  }

  noItems(): boolean {
    return this.itemsFormArray.controls.length === 0;
  }
  
}
