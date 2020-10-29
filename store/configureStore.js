import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import countReducer from '../reducers/countReducer';
import dataReducer from '../reducers/dataReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers(
    { 
        count: countReducer,
        data: dataReducer, 
    
    }

);
const configureStore = () => {
    return createStore(
            rootReducer,
            composeWithDevTools(applyMiddleware(thunk))
        );
}
export default configureStore;  