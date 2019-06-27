import { createSelector } from 'reselect';

const getTodosState = state => state.todos;

export const makeGetTodos = () => createSelector(
    getTodosState,
    todos => todos
);