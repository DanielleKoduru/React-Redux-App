const initialState ={
    title: "Covid-19 Data",
    isFetching: false,
    data: "",
    error: ""
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_COVID_DATA":
            return {
                ...state,
                isFetching: true
            }
        case "FETCHING_COVID_DATA_SUCCESS":
                return {
                    ...state,
                    isFetching: false,
                    error:"",
                    data: action.payload
                }
        case "FETCHING_COVID_DATA_ERROR":
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
            default:
                return state;
    }
}