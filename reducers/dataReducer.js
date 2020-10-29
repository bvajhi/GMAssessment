const initialState = {
    isLoading: false,
    isError: false, 
    data: [],
};
const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
export default dataReducer;