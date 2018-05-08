import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TodoDataService } from './../../services/TodoData/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { TodoItem } from './../../models/TodoItem/todo-item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos:  TodoItem[] = [];

  constructor (
    private todoDataService: TodoDataService,
    private route: ActivatedRoute
  ) {
  }

  public ngOnInit() {
    this.route.data
    .subscribe((data) => {
      this.todos = data['todos'];
    });
  }

  public onAddTodo(todo: TodoItem) {
    this.todoDataService.addTodo(todo)
      .subscribe((newTodo) => {
        this.todos = this.todos.concat(newTodo);
      });
  }

  public onToggleTodoComplete(todo: TodoItem) {
    this.todoDataService.toggleTodoComplete(todo)
      .subscribe((updatedTodo) => {
        todo = updatedTodo;
      });
  }

  public onRemoveTodo(todo: TodoItem) {
    this.todoDataService.deleteTodoById(todo.id)
      .subscribe((_) => {
        this.todos = this.todos.filter((t) => t.id !== todo.id);
      });
  }

}
