import * as todosActions from './todos.constants';
import initialState from '../../../redux/initialState';

export default function todosReducer (state= initialState.todos, action) {
    console.log('ACTION ---> ', action.type);
  
    switch (action.type) {
        // --- ADD ---
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
                 ...state,
                list : [ 
                    ...state.list, {
                        ...action.payload,
                    }
                ],
                loading : false, 
            }
        // --- FETCH ---
        case todosActions.FETCH_TODOS_INIT:
            return {
                ...state,
                loading : true       
            }

        case todosActions.FETCH_TODOS_FAILURE:
            return {
                ...state,
                loading : false,
                error: action.payload 
            }

        case todosActions.FETCH_TODOS_SUCCESS:
            return {
                ...state,
                list : action.payload ,
                loading : false, 
            }

        default:
            return state;
    }
};
