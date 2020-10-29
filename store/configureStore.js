import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import countReducer from '../reducers/countReducer';
import apiReducer from '../reducers/apiReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers(
    { 
        count: countReducer,
        data: apiReducer, 
    
    }

);
const configureStore = () => {
    return createStore(
            rootReducer,
            composeWithDevTools(applyMiddleware(thunk))
        );
}
export default configureStore;  