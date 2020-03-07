import * as types from './../../actions/types';
import initialState from '../initialState';

const isEmpty = require("is-empty");

export default function imagesReducers(state = initialState.images, action) {

	switch(action.type){
		case types.LOAD_IMAGES_SUCCESS:
			return action.payload
		case types.ADD_IMAGE_SUCCESS:
			 return [
        ...state.filter(image => image.id !== action.payload._id),
       	 Object.assign({}, action.payload)
		 ] 
		case types.UPDATE_IMAGE_SUCCESS:
			return [
				...state.filter(image => image.id !== action.payload._id),
					Object.assign({}, action.payload)
				 ] 
     	case types.DELETE_IMAGE_SUCCESS:
			const newState = Object.assign([], state);
			const indexOfImageToDelete = state.findIndex(image => {
				return image.id == action.payload._id
			})
			newState.splice(indexOfImageToDelete, 1);	
			return newState;
		default:
		return state;

	}

}