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
                        .set('error', fromJS(action.error));

        case todosActions.ADD_TODO_SUCCESS:
            return state.set('loading', false)
                        .update('list', todos => todos.push(fromJS(action.data)));

        // --- FETCH ---
        case todosActions.FETCH_TODOS_INIT:
            return state.set('loading', true);  

        case todosActions.FETCH_TODOS_FAILURE:
            return state.set('loading', false)
                        .set('error', fromJS(action.error));

        case todosActions.FETCH_TODOS_SUCCESS:
            return state.set('loading', false)
                        .set('list', fromJS(action.data))

        // --- UPDATE ---
        case todosActions.UPDATE_TODO_INIT:
            return state.set('loading', true);        
            
        case todosActions.UPDATE_TODO_FAILURE:
            return state.set('loading', false)
                        .set('error', fromJS(action.error));

        case todosActions.UPDATE_TODO_SUCCESS:
            let indexToUpdate = state.get('list').findIndex(listing => {
                return listing.get('id') === action.data.id;
            });
            return state.set('loading', false) 
                        .setIn(['list', indexToUpdate], fromJS(action.data));
                        
        // --- DELETE ---
        case todosActions.DELETE_TODO_INIT:
            return state.set('loading', true);     

        case todosActions.DELETE_TODO_FAILURE:
            return state.set('loading', false)
                        .set('error', fromJS(action.error));

        case todosActions.DELETE_TODO_SUCCESS:
            let indexToRemove = getIndexById(state, action.payload.id);
            return state.set('loading', false) 
                        .get('list').delete(indexToRemove);
        default:
            return state;
    }
};


getIndexById = (state, id) => {
    return state.get('list').findIndex(listing => {
        return listing.get('id') === id;
    });
}

