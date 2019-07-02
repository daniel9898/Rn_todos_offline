import * as todosConstant from './todos.constants';
import todoDb from '../todos.db';

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
            todoDb.save({ name: text, status: 'incompleta' });
            return dispatch(addTodoSuccess(text)); //guardamos en la db
        } catch (error) {
            return dispatch(addTodoFailure(error));
        }
    };
}
