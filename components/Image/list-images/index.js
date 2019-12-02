import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ImageItem from '../image-item/';

const ListImages =({images}) =>  (

	<div>
		<ul className="list-images-user">
		{ images && images.length 
			? images.map(image => {
			return <ImageItem image={image} />;
		})
			: " No Pictures yet !"}
		</ul>
	</div>

);

const mapStateToProps = (state) => {

	return{
		images: state.images
	}
}
export default connect(mapStateToProps, null)(ListImages);