import React from 'react';
import ImageItem from '../image-item';
import {sortedElementsByDateDesc} from '../../../../Utilities';
import { connect } from 'react-redux';


const ListImagesTimeline =({images}) =>  {
	const sortedImagesByDate = sortedElementsByDateDesc(images);

	return (
	<div className="discover-list-images">
		{ sortedImagesByDate && sortedImagesByDate.length ? 
		 sortedImagesByDate.map(image => {
			return <ImageItem image={image} key={image._id} />;
		})
		: "You must suscribe to someone ! "}
	</div>
	)
	
};

const mapStateToProps = (state) => {
	let images = state.images;

	return {
		images
	}
}
export default connect(mapStateToProps, null)(ListImagesTimeline);