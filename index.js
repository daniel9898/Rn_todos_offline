import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './src/redux/root.reducer';
import Navigation  from './src/share/navigation/stack.navigation';

const initialState = {
	todos : []
}

const store = createStore(rootReducer, initialState);

const Root = () => ( 
    <Provider store={store}>
        <Navigation /> 
    </Provider>
)

AppRegistry.registerComponent(appName, () => Root);
