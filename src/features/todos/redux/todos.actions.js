import * as todosConstant from './todos.constants';
import todosConnection from '../todos.db';

// --- FETCH ---
export function fetchTodosInit() {
    return { type: todosConstant.FETCH_TODOS_INIT};
};
export function fetchTodosFailure(error) {
    return {
        type: todosConstant.FETCH_TODOS_FAILURE,
        payload: error,
    };
};
export function fetchTodosSuccess(data) {
    return {
        type: todosConstant.FETCH_TODOS_SUCCESS,
        payload: data,
    };
};
export function fetchTodos() {
    return async (dispatch) => {
        dispatch(fetchTodosInit());
        
        try {
            const todos = await todosConnection.getAll();
            return dispatch(fetchTodosSuccess(todos));
        } catch (error) {
            return dispatch(fetchTodosFailure(error));
        }
    };
};

// --- ADD ---
export const addTodoInit = () => {
	return {
		type: todosConstant.ADD_TODO_INIT
	}
}

export const addTodoFailure = error => {
	console.log('error --> ',error);
	return {
		type: todosConstant.ADD_TODO_FAILURE,
		payload: error
	}
}

export const addTodoSuccess = data => {
	return {
		type: todosConstant.ADD_TODO_SUCCESS,
		payload: {
			text: data
		}
	}
}

export const addTodo = text => {
    return async (dispatch) => {
        dispatch(addTodoInit());
      
        try {
            let response = await todosConnection.save({ name: text, status: 'incompleta' });
            console.log('response ',response);
            let todo = await todosConnection.getById(response.insertId);
            console.log('todo by id ',todo[0]);
            return dispatch(addTodoSuccess(todo[0]));
        } catch (error) {
            return dispatch(addTodoFailure(error));
        }
    };
}
