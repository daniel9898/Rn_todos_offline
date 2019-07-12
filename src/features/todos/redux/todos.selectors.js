import { createSelector } from 'reselect';

const getTodosState = state => state.getIn(['todos']);

export const makeGetTodos = () => createSelector(
    getTodosState,
    todos => todos
);