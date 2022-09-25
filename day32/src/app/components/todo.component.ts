import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  form!: FormGroup;
  todoArrayCtrl!: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  private createForm(): FormGroup {
    this.todoArrayCtrl = this.fb.array([]);
    return this.fb.group({
      name: this.fb.control('', [ Validators.required, Validators.minLength(3) ]),
      email: this.fb.control('', [ Validators.required, Validators.email ]),
      todos: this.todoArrayCtrl
    });
  }

  processForm() {
    return;
  }

  addToDo() {
    const todo = this.fb.group({
      task: this.fb.control<string>('', [ Validators.required, Validators.minLength(5) ]),
      priority: this.fb.control<number>(1, [ Validators.min(1), Validators.max(5)])
    });

    this.todoArrayCtrl.push(todo);
  }
}
