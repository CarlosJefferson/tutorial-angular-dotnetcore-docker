import { AppRoutingModule } from './app-routing.module';
import { TodoApiService } from './services/TodoApi/todo-api.service';
import { FormsModule } from '@angular/forms';
import { TodoDataService } from './services/TodoData/todo-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListHeaderComponent } from './components/todo-list-header/todo-list-header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from './components/todo-list-footer/todo-list-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosComponent } from './components/todos/todos.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent,
    TodosComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TodoDataService,
    TodoApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
