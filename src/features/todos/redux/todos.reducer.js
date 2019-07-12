import * as todosActions from './todos.constants';
import initialState from '../../../redux/initialState';
import { fromJS } from "immutable";

export default function todosReducer (state= initialState.getIn(['todos']), action) {
    switch (action.type) {

        // --- ADD ---
        case todosActions.ADD_TODO_INIT:
            return state.set('loading', true);        
            
        case todosActions.ADD_TODO_FAILURE:
            return state.set('loading', false)
                        .set('error', fromJS(action.payload));

        case todosActions.ADD_TODO_SUCCESS:
            return state.set('loading', false)
                        .update('list', todos => todos.push(action.payload));

        // --- FETCH ---
        case todosActions.FETCH_TODOS_INIT:
            return state.set('loading', true);  

        case todosActions.FETCH_TODOS_FAILURE:
            return state.set('loading', false)
                        .set('error', fromJS(action.payload));

        case todosActions.FETCH_TODOS_SUCCESS:
            return state.set('loading', false)
                        .set('list', fromJS(action.payload)) 

        // --- DELETE ---
        case todosActions.DELETE_TODO_INIT:
            return state.set('loading', true);     

        case todosActions.DELETE_TODO_FAILURE:
            return state.set('loading', false)
                        .set('error', fromJS(action.payload));

        case todosActions.DELETE_TODO_SUCCESS:
            return state.set('loading', false);
                        //.get('list').filter(t => t.get(id) !== action.id);
        default:
            return state;
    }
};

/*export default function todosReducer (state= initialState.getIn(['todos']), action) {
  
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
        // --- DELETE ---
        case todosActions.DELETE_TODO_INIT:
            return {
                ...state,
                loading : true       
            }

        case todosActions.DELETE_TODO_FAILURE:
            return {
                ...state,
                loading : false,
                error: action.payload 
            }

        case todosActions.DELETE_TODO_SUCCESS:
            return {
                ...state,
                //list : action.payload,
                loading : false, 
            }

        default:
            return state;
    }
};*/
