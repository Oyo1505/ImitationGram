import * as types from './../../actions/types';
import initialState from '../initialState';
const isEmpty = require("is-empty");

export default function usersReducers(state = initialState.users, action) {
	
	switch(action.type){
		case types.LOAD_USERS_SUCCESS:
		return action.payload
		 case types.UPDATE_USER_SUCCESS:
	     return [
        ...state.filter(user => user._id !== action.payload._id),
        	Object.assign({}, action.payload)
     	 ]
     	 case types.DELETE_USER_SUCCESS:{

        const newState = Object.assign([], state);
        const indexOfUserToDelete = state.findIndex(user => {	
          return user._id === action.payload._id
        })
        newState.splice(indexOfUserToDelete, 1);
         return newState;
      }
		default:
		return state;
	}
}