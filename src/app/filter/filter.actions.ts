import { createAction, props } from '@ngrx/store';

export type validFilter = 'todos' | 'completados' | 'pendientes';

export const setFilter = createAction(
    '[Filter] Set Filter',
    props<{ filter: validFilter  }>()
);