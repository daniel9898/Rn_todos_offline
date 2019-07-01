import * as todosActions from './todos.constants';
//exportar el initialState

export default function todosReducer (state= [], action) {
    console.log('state ',state);
    console.log('action ',action);

    switch (action.type) {
        case todosActions.ADD_TODO_INIT:
            return {
                ...state
                    
            }
        case todosActions.ADD_TODO_FAILURE:
            return {
                ...state,
            }
        case todosActions.ADD_TODO_SUCCESS:
        console.log('state ',state)
            return [
                ...state, {
                    id: action.id,
                    text: action.text
                }
            ]
        default:
            return state;
    }
};
