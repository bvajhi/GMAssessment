import CONST from '../constants'

const initialState = {
    isLoading: false,
    didFail: false, 
    dataArray: [],
};
const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case CONST.GET_CURRENT_REPO_COMMITS:
           return {
                isLoading: false,
                didFail: false,
                dataArray: action.payload,
            }

        case CONST.GET_CURRENT_REPO_COMMITS_FAIL:
           return {
                isLoading: false,
                didFail: true,
                dataArray: [],
            }

        case CONST.SET_IS_LOADING:

            return{
                ...state,
                isLoading: action.payload,
            }    
        default:
            return state;
    }
}
export default dataReducer;