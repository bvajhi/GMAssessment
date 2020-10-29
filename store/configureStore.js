import { createStore, combineReducers } from 'redux';
import countReducer from '../reducers/countReducer';
import dataReducer from '../reducers/dataReducer'

const rootReducer = combineReducers(
    { 
        count: countReducer,
        data: dataReducer, 
    
    }

);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;  