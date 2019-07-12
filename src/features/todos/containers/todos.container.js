import React, { PureComponent }from 'react';
//import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodosScreen from '../components/todos.screen'; 
import { makeGetTodos } from '../redux/todos.selectors';
import * as todosActions from '../redux/todos.actions';
 
class TodosContainer extends PureComponent {

    async componentDidMount() {
        await this.props.todosActions.fetchTodos();
    }
    
    render() {
        return(
            <TodosScreen {...this.props} />
        );
    }
};


const makeMapStateToProps = () => {
    const getTodosState = makeGetTodos();

    const mapStateToProps = (state) => {
        return {
            todos: getTodosState(state)
        };
    };
    return mapStateToProps;
};

const mapDispatchToprops = (dispatch) => {
    return {
        todosActions: bindActionCreators(todosActions, dispatch),
    };
}

export default connect(makeMapStateToProps, mapDispatchToprops)(TodosContainer);


