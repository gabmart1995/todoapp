import { Todo } from './todos/models/todo-models';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/todo-reducer';
import { filterReducer } from './filter/filter.reducer';
import { validFilter } from './filter/filter.actions';

export interface AppState {
  todos: Todo[];
  filter: validFilter;
}

export  const appReducer: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
};
