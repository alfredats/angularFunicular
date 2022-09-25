import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from '../models';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  sub$!: Subscription;
  todos : Todo[] = [];

  constructor(private todoSvc: TodoService) { }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.sub$ = this.todoSvc.onNewData.subscribe(this.processData);

  }

  processData(data: Todo[]) {
    console.log(">>> todos: ", data);
    this.todos = data; 
  }

}
