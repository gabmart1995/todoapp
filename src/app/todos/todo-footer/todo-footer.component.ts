import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filter/filter.actions';
import { Todo } from '../models/todo-models';
import { limpiarCompletados } from './../todo-actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  actualFilter: actions.validFilter;
  validFilters: actions.validFilter[] = ['todos', 'pendientes', 'completados'];
  pendient: number = 0;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    // this.store.select('filter').subscribe(( filter ) => this.actualFilter = filter );

    this.store.subscribe( ({ todos, filter }) => {
      // console.log( state );
      this.actualFilter = filter;
      this.pendient = todos.filter( ( todo: Todo ) => !todo.completed ).length;
    });
  }

  changeFilter( filter: actions.validFilter ) {
    this.store.dispatch( actions.setFilter({ filter }) );
  }

  clearCompleted() {
    this.store.dispatch( limpiarCompletados() );
  }

}
