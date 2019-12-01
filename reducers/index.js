import { combineReducers } from 'redux';
import user from './user/reducer';
import users from './users/reducer';
import images from './images/reducer';
import errors from './error/reducer';

export default combineReducers({
	auth: user,
	users: users,
	images: images,
	errors
})