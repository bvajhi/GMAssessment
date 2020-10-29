import CONST from '../constants';
import { getCurrentRepoCommits } from '../api/api'
import dataReducer from '../reducers/apiReducer';


export function getData (){

    const apiPromise = getCurrentRepoCommits();

    return dispatch => {
        apiPromise.then ( value => {
                if (value.fail){
                    dispatch({type: CONST.GET_CURRENT_REPO_COMMITS_FAIL,});
                }
                else{
                    dispatch({type: CONST.GET_CURRENT_REPO_COMMITS, payload: value});
                }
            }
        );

    };



}