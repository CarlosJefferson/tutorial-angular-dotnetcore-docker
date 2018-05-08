import { TodoItem } from './../../models/TodoItem/todo-item';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {

  public newTodo: TodoItem = new TodoItem();

  @Output()
  private add: EventEmitter<TodoItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new TodoItem();
  }

}
