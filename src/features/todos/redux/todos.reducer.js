import * as todosActions from './todos.constants';
import initialState from '../../../redux/initialState';

export default function todosReducer (state= initialState.todos, action) {
  
    switch (action.type) {
        case todosActions.ADD_TODO_INIT:
            return {
                ...state,
                loading : true       
            }

        case todosActions.ADD_TODO_FAILURE:
            return {
                ...state,
                loading : false,
                error: action.payload 
            }

        case todosActions.ADD_TODO_SUCCESS:
            return {
                list : [ 
                    ...state.list, {
                        ...action.payload,
                    }
                ],
                loading : false, 
            }

        default:
            return state;
    }
};
