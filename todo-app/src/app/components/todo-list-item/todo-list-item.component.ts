import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../../models/TodoItem/todo-item';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: TodoItem;

  @Output()
  remove: EventEmitter<TodoItem> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<TodoItem> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  toggleTodoComplete(todo: TodoItem) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: TodoItem) {
    this.remove.emit(todo);
  }

}
