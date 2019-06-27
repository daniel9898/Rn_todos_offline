import * as todosActions from './todos.constants';
//exportar el initialState

export default function todosReducer (state= [], action) {
    switch (action.type) {
        case todosActions.ADD_TODO_INIT:
            return {
                ...state,    
            }
        case todosActions.ADD_TODO_FAILURE:
            return {
                ...state,
            }
        case todosActions.ADD_TODO_SUCCESS:
            return {
                ...state,
            }
        default:
            return state;
    }
};
