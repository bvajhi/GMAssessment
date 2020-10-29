import CONST from '../constants';
import { getCurrentRepoCommits } from '../api/api'
import dataReducer from '../reducers/dataReducer';


export function getData (){

    const apiPromise = getCurrentRepoCommits();

    return dispatch => {
        apiPromise.then ( value => {
                dispatch({type: CONST.GET_CURRENT_REPO_COMMITS, payload: value})
            }
        );

    };



}