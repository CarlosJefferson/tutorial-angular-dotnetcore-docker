import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../../models/TodoItem/todo-item';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent implements OnInit {

  @Input() public todos: TodoItem[];

  constructor() { }

  ngOnInit() {
  }

}
