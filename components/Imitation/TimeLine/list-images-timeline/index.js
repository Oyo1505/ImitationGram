import React, {Fragment} from 'react';
import ImageItemTimeline from '../image-item-timeline';
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
		: " No Pictures yet !"}
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