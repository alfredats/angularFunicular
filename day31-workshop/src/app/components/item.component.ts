import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Item } from '../item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemForm!: FormGroup

  @Output()
  onItemAdd = new Subject<Item>();  

  constructor(private fb: FormBuilder) { 
  }

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      name: this.fb.control('', [ Validators.required, Validators.minLength(3) ]),
      unitPrice: this.fb.control('', [ Validators.required, Validators.pattern(/([0-9]+)[\.]?[0-9]{0,2}/)]),
      quantity: this.fb.control('1', [ Validators.required ]),
    });
  }

  processForm() { 
    console.log(this.itemForm.value);
    const i : Item = this.itemForm.value as Item;
    this.onItemAdd.next(i);
    this.itemForm.reset();
  }
    
}
