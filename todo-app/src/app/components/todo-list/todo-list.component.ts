import { TodoItem } from './../../models/TodoItem/todo-item';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() public todos: TodoItem[];

  @Output() private remove: EventEmitter<TodoItem> = new EventEmitter();

  @Output() private toggleComplete: EventEmitter<TodoItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onToggleTodoComplete(todo: TodoItem) {
    this.toggleComplete.emit(todo);
  }

  public onRemoveTodo(todo: TodoItem) {
    this.remove.emit(todo);
  }

}
