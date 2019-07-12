import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import rootReducer from './src/redux/root.reducer';
import Navigation  from './src/share/navigation/stack.navigation';
import thunk from 'redux-thunk';
import initialState from './src/redux/initialState';

const logger = createLogger({
    stateTransformer: state => state.toJS()
})

const middlewares = [thunk, logger];
const enhancer = composeWithDevTools(
	applyMiddleware(...middlewares)
);


const store = createStore(
	rootReducer, 
	initialState,
	enhancer,
);

const Root = () => ( 
    <Provider store={store}>
        <Navigation /> 
    </Provider>
)

AppRegistry.registerComponent(appName, () => Root);
