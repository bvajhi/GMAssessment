/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

const ReduxApp = () => (
    <Provider store={configureStore()}>
        <App/>
    </Provider>
)




AppRegistry.registerComponent(appName, () => ReduxApp);
