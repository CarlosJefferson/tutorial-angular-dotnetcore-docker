import { Observable } from 'rxjs';
import { TodoDataService } from './services/TodoData/todo-data.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { TodoItem } from './models/TodoItem/todo-item';

@Injectable()
export class TodosResolver implements Resolve<Observable<TodoItem[]>> {

  constructor(
    private todoDataService: TodoDataService
  ) {
  }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<TodoItem[]> {
    return this.todoDataService.getAllTodos();
  }
}
