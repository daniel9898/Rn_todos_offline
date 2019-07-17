import React, { PureComponent }from 'react';
//import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todosActions from '../redux/todos.actions';
import FormTodo from '../components/formTodo.cmp'

 
class FormContainer extends PureComponent {
   
    render() {
        return(
            <FormTodo {...this.props}/>
        );
    }
};

const mapDispatchToprops = (dispatch) => {
    return {
        todosActions: bindActionCreators(todosActions, dispatch),
    };
}

export default connect(null, mapDispatchToprops)(FormContainer);


