import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo-models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { validFilter } from './../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  actualFilter: validFilter;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    // this.store.select('todos').subscribe( ( todos: Todo[] ) => this.todos = todos );

    this.store.subscribe( ({ todos, filter }) => {
      this.todos = todos;
      this.actualFilter = filter;
    });
  }

}
