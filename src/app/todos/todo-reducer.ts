import { createReducer, on } from '@ngrx/store';
import * as actions from './todo-actions';
import { Todo } from './models/todo-models';

export const estadoInicial: Todo[] = [
  new Todo('salvar al mundo'),
  new Todo('vencer a Thanos'),
  new Todo('comprar traje de Iron Man'),
  new Todo('robar el escudo de Capitan América')
];

const _todoReducer = createReducer( estadoInicial,
  on( actions.crear, ( state,  { text } ) =>  {
    
    // console.log( state, text );
    // nota: prevenir la mutacion del estado en redux
    
    return [
        ...state,
        new Todo( text )   
    ];
  }),
  on( actions.toggle, ( state, { id } ) => {
    return state.map( ( todo: Todo ) => {

      if ( todo.id === id ) {

        return {
          ...todo,
          completed: !todo.completed
        };

      } else {
        return todo;
      }

    });
  }),

  on( actions.editar, ( state, { id, text } ) => {

    return state.map( ( todo: Todo ) => {

      if ( todo.id === id ) {

        return {
          ...todo,
          text
        };
      } else {
        return todo;
      }
    });
  }),

  on( actions.borrar, ( state, { id } ) => state.filter( ( todo: Todo ) =>  todo.id !== id )),

  on( actions.toggleAll, ( state, { completed } ) => {

    return state.map( ( todo: Todo ) =>  {
      return {
        ...todo,
        completed
      };
    });
  }),

  on( actions.limpiarCompletados, ( state ) => {
    return state.filter( ( todo: Todo ) => !todo.completed );
  })
);


export function todoReducer( state, action ) {
  return _todoReducer( state, action );
};