import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Todo } from './models';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day33';

  constructor(private todoSvc: TodoService) {

  }

  getData() {
    console.log("================== before call ========================");
    this.todoSvc.getTodo()
      .then(this.take10)
      .then(this.processTodo)
      .catch(error => {
        console.error(">>> error: ", error);
      });
    console.log("================== after call ========================");
  }

  private processTodo(todos : Todo[]) {
      console.info(">>> data:", todos);
  }

  private take10(todos: Todo[]) {
    return todos.slice(0,10);
  }

}
