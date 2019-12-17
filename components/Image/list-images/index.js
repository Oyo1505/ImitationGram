import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ImageItem from '../image-item/';

const ListImages =({images}) =>  (

	<div>
		<ul className="list-images-user">
		{ images && images.length 
			? images.map(image => {
			
			return <ImageItem key={image._id} image={image} />;
		})
			: "No Pictures yet!"}
		</ul>
	</div>

);
const getImagesUser = (images, userId) => {
	const arrayImage = Object.assign([], images.filter(image => image.user_id === userId ));
	return arrayImage;
}
const mapStateToProps = (state, ownProps) => {
	const userId = ownProps.userId;
	let images = []
	if(state.images.length > 0){
		images = getImagesUser(state.images, userId);

	}
	
	return{
		images: images 
	}
}
export default connect(mapStateToProps, null)(ListImages);