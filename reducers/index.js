import { combineReducers } from 'redux';
import user from './user/reducer';
import users from './users/reducer';
import errors from './error/reducer';

export default combineReducers({
	auth: user,
	users: users,
	errors
})