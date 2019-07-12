import { combineReducers } from 'redux-immutable'; //cambiamos a esta funcion para que el reductor acepte estucturas de datos inmutables
import todosReducer from '../features/todos/redux/todos.reducer';

const rootReducer = combineReducers({
    todos: todosReducer
});

export default rootReducer;