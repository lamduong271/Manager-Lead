import axios from 'axios';
import { returnErrors } from './messages';
import { USER_LOADED, USER_LOADING, AUTH_ERROR } from './types';

//Check token and load user
export const loadUser = () => (dispatch, getState) => {
    //user loading
    dispatch({ type: USER_LOADING})

    //get token from state
    const token = getState().auth.token

    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //if token, add to header config
    if(token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    axios.get('/api/auth/user', config)
    .then(res => {
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status))
    })
}