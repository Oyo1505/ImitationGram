import * as types from './../../actions/types';
import initialState from '../initialState';

export default function errorReducer(state = initialState.errors, action) {
  switch (action.type) {
    case types.GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}