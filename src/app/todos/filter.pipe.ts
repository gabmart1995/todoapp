import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo-models';
import { validFilter } from '../filter/filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform( todos: Todo[], filter: validFilter): Todo[] {
    
  	// console.log( value );
  	// console.log( filter );

  	switch ( filter ) {
  		case "completados":
  			return todos.filter( ( todo: Todo ) => todo.completed );
  			
  		case "pendientes":
  			return todos.filter( ( todo: Todo ) => !todo.completed );

  		default:
  			return todos;
  	}

    
  }

}
