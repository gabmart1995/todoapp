import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo-models';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo-actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  chkCompleted: FormControl;
  textEdit: FormControl;

  edit = false;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {

    // no se puede realizar asignaciones directas a variables compuestas.
    // marca de error solo lectura. Usa el spread operator para completar los
    // campos que se necesitan.

    /* this.todo = {
      ...this.todo,
      completed: true
    }; */

    this.chkCompleted = new FormControl( this.todo.completed );
    this.textEdit = new FormControl( this.todo.text, Validators.required );


    // se suscribe al cambio de checkbox de completado
    this.chkCompleted.valueChanges.subscribe( ( value ) => {
      this.store.dispatch( actions.toggle({ id: this.todo.id }) );
    });
  }

  editar() {

    this.edit = true;

    // mantiene el valor del formulario
    this.textEdit.setValue( this.todo.text );

    setTimeout( () => {
      this.txtInputFisico.nativeElement.select();
    }, 1 );
  }

  editFinish() {

    this.edit = false;

    if ( this.textEdit.invalid ) {
      return;
    }

    if ( this.textEdit.value === this.todo.text ) {
      return;
    }

    this.store.dispatch(
      actions.editar({ id: this.todo.id, text: this.textEdit.value })
    );
  }

  borrar() {
    this.store.dispatch( actions.borrar({ id: this.todo.id }) );
  }

}
