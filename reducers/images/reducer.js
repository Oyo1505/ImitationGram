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
       	 Object.assign({}, action.image)
     	] 
		default:
		return state;

	}

}