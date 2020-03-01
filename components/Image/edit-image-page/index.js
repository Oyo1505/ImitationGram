import React from 'react';
import PropTypes from "prop-types";
import {Image, Transformation } from 'cloudinary-react';
import { bindActionCreators } from 'redux';
import * as userActions from "../../../../actions/";
import { connect } from 'react-redux';
class EditImagePage extends React.Component {
    
	constructor(props) {
        super(props);
        this.state = {
            image: this.props.image,
        }
	}

	render() {
		return (
			<div> <Image cloudName={process.env.CLOUDINARY_NAME} publicId={this.props.image.url}>
                    <Transformation effect="cartoonify" />
                    <Transformation radius="max" />
                    <Transformation effect="outline:100" color="lightblue" />
                    <Transformation background="lightblue" />
                    <Transformation height="300" crop="scale" />
                </Image></div>
		);
	}
}
EditImagePage.propTypes = {
    image: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}

const getImageByPublicId = (images, imageId) => {
    const image = Object.assign({}, images.find(image => image.name === imageId));
    return image;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    }
}
const mapStateToProps = (state, ownProps) => {
    let image = {
		"_id": "",
		"url":"",
		"user_id":"", 
		"likes":"",
		"name":"",
	};
    const imageId = ownProps.match.params.id;
    
    const images = state.images;
    if (imageId && state.images.length > 0) {
       
        image = getImageByPublicId(images, imageId);
    }
    return {
        image: image,
        images: state.images
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(EditImagePage)