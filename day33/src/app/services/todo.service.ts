import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Subject, tap } from 'rxjs';
import { Todo } from '../models';

@Injectable()
export class TodoService {
  onNewData = new Subject<Todo[]>();

  constructor(private http: HttpClient) {}

  getTodo(userId: number | undefined = undefined): Promise<Todo[]> {
    let params = new HttpParams();
    if (userId !== undefined) {
      params = params.set('userId', userId);
    }
    return firstValueFrom(
      this.http
        .get<Todo[]>('https://jsonplaceholder.typicode.com/todos', { params })
        /* rxjs */
        .pipe(
          tap((v) => {
            this.onNewData.next(v);
          })
        )
    );
    // ).then(data => {
    //     this.onNewData.next(data);
    //     return data;
    // });
  }
}
