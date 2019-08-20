import { AUTH_ERROR, USER_LOADING, USER_LOADED } from '../actions/types'
const initialState = {
    token: localStorage.getItem('token'),
    isAutheticated: null,
    isLoading: false,
    user: null
}
export default function(state = initialState, action) {
    switch(action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isAutheticated:true,
                isLoading: false,
                user: action.payload
            }
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAutheticated:false,
                isLoading: false,
                user: null
            }
        default: 
            return state;
    }
}