import React, {Fragment} from 'react';
import ImageItemTimeline from '../image-item-timeline';
import { connect } from 'react-redux';

const ListImagesTimeline =({images}) =>  (
	<div>
	<ul className="list-images-user">
	{ images && images.length 
		? images.map(image => {
			return <ImageItemTimeline />;
	})
		: " No Pictures yet !"}
	</ul>
</div>
	
);
const mapStateToProps = (state) => {
	let images = state.images;
	return {
		images
	}
}
export default connect(mapStateToProps, null)(ListImagesTimeline);