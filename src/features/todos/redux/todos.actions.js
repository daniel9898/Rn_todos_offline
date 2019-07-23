import * as todosConstant from './todos.constants';
import todosConnection from '../todos.db';

// --- FETCH ---

export function fetchTodosInit() {
    return { type: todosConstant.FETCH_TODOS_INIT};
};
export function fetchTodosFailure(error) {
    return {
        type: todosConstant.FETCH_TODOS_FAILURE,
        error
    };
};
export function fetchTodosSuccess(data) {
    return {
        type: todosConstant.FETCH_TODOS_SUCCESS,
        data
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
	return {
		type: todosConstant.ADD_TODO_FAILURE,
		error
	}
}

export const addTodoSuccess = data => {
	return {
		type: todosConstant.ADD_TODO_SUCCESS,
		data
    }
}

export const addTodo = text => {
    return async (dispatch) => {
        dispatch(addTodoInit());
      
        try {
            let response = await todosConnection.save({ name: text, status: 'incompleta' });
            let todo = await todosConnection.getById(response.insertId);
            return dispatch(addTodoSuccess(todo[0]));
        } catch (error) {
            return dispatch(addTodoFailure(error));
        }
    };
}

// --- UPDATE ---

export const updateTodoInit = () => {
    console.log('updateTodoInit ');
    return {
        type: todosConstant.UPDATE_TODO_INIT
    }
}

export const updateTodoFailure = error => {
    return {
        type: todosConstant.UPDATE_TODO_FAILURE,
        error
    }
}

export const updateTodoSuccess = data => { 
    return {
        type: todosConstant.UPDATE_TODO_SUCCESS,
        data
    }
}

export const updateTodo = data => {
    return async (dispatch) => {
        dispatch(updateTodoInit());
      
        try {
            let response = await todosConnection.update(data);
            let todo = await todosConnection.getById(data.id);
            return dispatch(updateTodoSuccess(todo[0]));
        } catch (error) {
            return dispatch(updateTodoFailure(error));
        }
    };
}

// --- DELETE ---

export const deleteTodoInit = () => {
    return {
        type: todosConstant.DELETE_TODO_INIT
    }
}

export const deleteTodoFailure = error => {
    return {
        type: todosConstant.DELETE_TODO_FAILURE,
        error
    }
}

export const deleteTodoSuccess = id => {
    return {
        type: todosConstant.DELETE_TODO_SUCCESS,
        id
    }
}

export const deleteTodo = id => {
    console.log('id',id);
    return async (dispatch) => {
        dispatch(deleteTodoInit());
        try {
            let response = await todosConnection.delete(id);
            return dispatch(deleteTodoSuccess(id));
        } catch (error) {
            return dispatch(deleteTodoFailure(error));
        }
    };
}

