import { combineReducers } from 'redux';
import todos from '../features/todos/redux/todos.reducer';

const rootReducer = combineReducers({
    todos
});

export default rootReducer;