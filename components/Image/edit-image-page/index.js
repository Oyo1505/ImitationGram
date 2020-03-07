import React from 'react';
import PropTypes from "prop-types";
import {Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import { bindActionCreators } from 'redux';
import * as courseActions from "../../../../actions/";
import { connect } from 'react-redux';
class EditImagePage extends React.Component {
    
	constructor(props) {
        super(props);
        this.state = {
            image: this.props.image,
            radius: 0,
        }
    
	}
    copyTheCurrentImageObject = (image) => {
        let cloneImage = Object.assign({},this.state.image);
        return cloneImage;

    }
    handleRangeRadius = (event) => {
        event.preventDefault();
       let newImage = this.copyTheCurrentImageObject(this.state.image)
       newImage.url = this.image.state.url;
        
        this.setState({
            image:newImage,
            radius:event.target.value
        })
        
        this.props.actions.updateImage(this.state.image);

    }
    ref = image => {
        this.image = image
    }
	render() {
		return (
       
            <div>
                <Image 
                ref={this.ref}
                cloudName={process.env.CLOUDINARY_NAME} 
                publicId={`imitationGram/${this.state.image.name}`}
                >
                   <Transformation angle={this.state.radius} />
                </Image>
                <input type="range" min="0" step="1" max="50" value={this.state.radius} onChange={this.handleRangeRadius} />
            </div>
		);
	}
}
EditImagePage.propTypes = {
    image: PropTypes.object.isRequired
}

const getImageByPublicId = (images, imageId) => {
    const image = Object.assign({}, images.find(image => image.name === imageId));

    return image;
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
    if (imageId && images.length > 0) {
        image = getImageByPublicId(images, imageId);
        console.log(image);
    }
    return {
        image: image,
        images: images
    };
}

function mapDispatchToProps(dispatch) {	
    return {
      actions: bindActionCreators(courseActions, dispatch)
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(EditImagePage)