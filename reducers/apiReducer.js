import CONST from '../constants'

const initialState = {
    isLoading: false,
    isError: false, 
    dataArray: [],
};
const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case CONST.GET_CURRENT_REPO_COMMITS:
           return {
                isLoading: false,
                isError: false,
                dataArray: action.payload,
            }

        case CONST.GET_CURRENT_REPO_COMMITS_FAIL:
           return {
                isLoading: false,
                isError: true,
                dataArray: [],
            }
        default:
            return state;
    }
}
export default dataReducer;