import axios from 'axios';

const headers = {
    Accept: "application/json"
}

export const fetchData = () => (dispatch) => {
    dispatch({ type: "FETCHING_COVID_DATA" });

    axios.get("https://covid19api.com/", { headers: headers })
        .then(res => {
            dispatch({ type: "FETCHING_COVID_DATA_SUCCESS", payload: res.data })
            console.log(res);
        })
        .catch(err => {
            dispatch({ type: "FETCHING_COVID_DATA_ERROR", payload: err })
            console.log(err);
        })
}