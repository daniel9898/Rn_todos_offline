import * as todosConstant from './todos.constants';

let nextTodoId = 0

export const addTodoInit = () => {
	return {
		type: todosConstant.ADD_TODO_INIT
	}
}

export const addTodoFailure = error => {
	return {
		type: todosConstant.ADD_TODO_FAILURE,
		payload: error
	}
}

export const addTodoSuccess = data => {
	return {
		type: todosConstant.ADD_TODO_SUCCESS,
		id: nextTodoId++,
		payload: data
	}

}

export const addTodo = text => {
    return async (dispatch) => {
        dispatch(addTodoInit());

        try {
            //await authApi.restartPasswordToken(user);
            return dispatch(addTodoSuccess()); //guardamos en la db
        } catch (error) {
            return dispatch(addTodoFailure(error));
        }
    };
}
