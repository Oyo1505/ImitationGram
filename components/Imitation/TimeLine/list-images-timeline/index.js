import React, {Fragment} from 'react';
import ImageItemTimeline from '../image-item-timeline';
import {getUserById} from '../../../../Utilities';
import {sortedElementsByDateDesc} from '../../../../Utilities';
import { connect } from 'react-redux';


const ListImagesTimeline =({images}) =>  {
	const sortedImagesByDate = sortedElementsByDateDesc(images);

	return (
	<div>
		{ sortedImagesByDate && sortedImagesByDate.length ? 
		 sortedImagesByDate.map(image => {
			return <ImageItemTimeline image={image} key={image._id} />;
		})
		: "You must suscribe to someone ! "}
	</div>
	)
	
};
const getImagesFromSuscribed = (images, users) =>{
	const imagesFromSuscribed = [];
	
	for(var i = 0; i < images.length; i++){
		 for(var j = 0 ; j < users.length; j++ ){
			 if(images[i].user_id === users[j] ){
				imagesFromSuscribed.push(images[i]);
			 }
		 }
	 }
	return imagesFromSuscribed;
};

const mapStateToProps = (state) => {
	let allImages = state.images;
	let users = state.users;
	let userId = state.auth.user._id;
	let user = {    
		"_id": "",
		"name": "",
		"email": "",
		"profilePicture": "",
		"followers_id":[],
		"suscribed_id":[],
		"images_id": [],
	};      
	let imagesFromSub;
	
	if(userId && users.length > 0){
		user = getUserById(users, userId)
		let usersSuscribedAndCurrent = user.suscribed_id.slice();
		usersSuscribedAndCurrent.push(user._id);
		imagesFromSub = getImagesFromSuscribed(allImages, usersSuscribedAndCurrent);
	}
	
	return {
		images : imagesFromSub
	}
}
export default connect(mapStateToProps, null)(ListImagesTimeline);