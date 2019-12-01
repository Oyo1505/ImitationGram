import * as types from './../../actions/types';
import initialState from '../initialState';
const isEmpty = require("is-empty");

export default function userReducer(state = initialState.user, action) {
  
  switch(action.type) {
    case types.SET_CURRENT_USER:
    return{
      ...state,
      isAuthenticated: !isEmpty(action.payload),
      user: action.payload
    }
    case types.LOAD_USER_SUCCESS:
      return {
        ...state,
        user:action.payload
      }
    case types.CREATE_USER_SUCCESS:
      return [
        ...state.user.filter(user => user.id !== action.payload._id),
        Object.assign({}, action.user)
      ] 
    default: 
      return state;
  }
}

