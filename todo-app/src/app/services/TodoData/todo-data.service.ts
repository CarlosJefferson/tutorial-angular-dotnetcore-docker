import { Observable } from 'rxjs';
import { TodoApiService } from './../TodoApi/todo-api.service';
import { TodoItem } from './../../models/TodoItem/todo-item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  private lastId = 0;

  private todos: TodoItem[] = [];

  constructor(private todoApi: TodoApiService) { }

  public addTodo(todo: TodoItem): Observable<TodoItem> {
    return this.todoApi.createTodo(todo);
  }

  public deleteTodoById(id: number): Observable<TodoItem> {
    return this.todoApi.deleteTodoById(id);
  }

  public updateTodo(todo: TodoItem): Observable<TodoItem> {
    return this.todoApi.updateTodo(todo);
  }

  public getAllTodos(): Observable<TodoItem[]> {
    return this.todoApi.getAllTodos();
  }

  public getTodoById(id: number): Observable<TodoItem> {
    return this.todoApi.getTodoById(id);
  }

  public toggleTodoComplete(todo: TodoItem): Observable<TodoItem> {
    todo.isComplete = !todo.isComplete;
    return this.todoApi.updateTodo(todo);
  }
}
