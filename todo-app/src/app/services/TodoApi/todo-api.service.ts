import { environment } from './../../../environments/environment';
import { TodoItem } from './../../models/TodoItem/todo-item';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // API: GET /todos
  public getAllTodos(): Observable<TodoItem[]> {
    return this.http
      .get<TodoItem[]>(this.API_URL + '/todo');
  }

  // API: POST /todos
  public createTodo(todo: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.API_URL + '/todo', todo);
  }

  // API: GET /todos/:id
  public getTodoById(todoId: number): Observable<TodoItem> {
    return this.http.get<TodoItem>(this.API_URL + '/todo/' + todoId);
  }

  // API: PUT /todos/:id
  public updateTodo(todo: TodoItem): Observable<TodoItem> {
    return this.http.put<TodoItem>(this.API_URL + '/todo/' + todo.id, todo);
  }

  // API: DELETE /todos/:id
  public deleteTodoById(todoId: number): Observable<null> {
    return this.http.delete<null>(this.API_URL + '/todo/' + todoId);
  }
}
