import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import apiReducer from '../reducers/apiReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers(
    { 
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