import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import countReducer from '../reducers/countReducer';
import dataReducer from '../reducers/dataReducer'

const rootReducer = combineReducers(
    { 
        count: countReducer,
        data: dataReducer, 
    
    }

);
const configureStore = () => {
    return createStore(
            rootReducer,
            applyMiddleware(thunk)   
        );
}
export default configureStore;  