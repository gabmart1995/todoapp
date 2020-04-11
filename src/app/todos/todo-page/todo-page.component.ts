import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import * as actions from './../todo-actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completed = false;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  toggleAll() {
    this.completed = !this.completed;
    this.store.dispatch( actions.toggleAll({ completed: this.completed }) );
  }

}
