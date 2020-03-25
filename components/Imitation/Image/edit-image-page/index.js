import React from 'react';
import PropTypes from "prop-types";
import Header from '../../Header';
import {Image, Transformation } from 'cloudinary-react';
import { bindActionCreators } from 'redux';
import filters from '../../../../json/filters'
import RangeInput from '../../../common/RangeInput';
import SelectInput from '../../../common/SelectInput';
import TextInput from '../../../common/TextInput';
import * as imageActions from "../../../../actions/";
import { connect } from 'react-redux';

class EditImagePage extends React.Component {
    
	constructor(props) {
        super(props);
        this.state = {
            image: this.props.image,
            radius: 0,
            filterEffect:'',
            text:{
                content:'',
                fontFamily:'',
                fontSize:20,
                color:'',
                textDecoration:'',
                fontWeight:'',
                fontStyle:''
            },
        }
    
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        return this.state != nextState;
    }
    copyTheCurrentObject = (object) => {
        let cloneImage = Object.assign({},object);
        return cloneImage;
    }

    handleRangeRadius = (event) => {
       event.preventDefault();
       let newImage = this.copyTheCurrentObject(this.state.image)
       this.setState({
            image:newImage,
            radius:event.target.value
        })
    }
 
    handleSelectFilter = (event) => {
        event.preventDefault();
        let newImage = this.copyTheCurrentObject(this.state.image)
        this.setState({
             image:newImage,
             filterEffect: event.target.value
         })
     }

     handleTextInput = (event) => {
        event.preventDefault();
        let newImage = this.copyTheCurrentObject(this.state.image);
        let copyStateText = this.copyTheCurrentObject(this.state.text);
        newImage.url = this.image.state.url;
        copyStateText[event.target.name]=event.target.value;
        this.setState({
             image:newImage,
             text:copyStateText
         })
         console.log(copyStateText[event.target.name], 1)
     }
     
     onSubmit = (event) => {
        event.preventDefault();
        let newImage = this.copyTheCurrentObject(this.state.image)
        newImage.url = this.image.state.url;
        this.props.actions.updateImage(newImage);
        
    }
    ref = image => {
        this.image = image
    }
	render() {
		return (
       
            <div style={{ height: "5vh" }} className="container valign-wrapper" data-test="editImageComponent">
				<Header />
                <div>
                <Image 
                ref={this.ref}
                cloudName={process.env.CLOUDINARY_NAME} 
                publicId={`imitationGram/${this.state.image.name}`}
                
                >
                   <Transformation width="500" crop="scale" />
                   <Transformation radius={this.state.radius} />
                   {this.state.text.content &&
                    <Transformation width="500"  overlay={{fontFamily: "Arial", fontSize: this.state.text.fontSize, text: this.state.text.content  }} x="0" y="100" crop="fit"/>
                    }
                    {this.state.filterEffect &&
                    <Transformation effect={`art:${this.state.filterEffect}`} />
                    
                    }
                    
                   
                </Image>
                </div>
                <RangeInput min="0" max="50" value={this.state.radius} name="radius" onChange={this.handleRangeRadius}  />
               
                <SelectInput name='select' values={filters} onChange={this.handleSelectFilter} />
                <TextInput name='content' placeholder="Votre texte" value={this.state.text.content} onChange={this.handleTextInput} />
                <TextInput name='fontSize' type="number" value={this.state.text.fontSize} onChange={this.handleTextInput} />
                <input 
			    type="submit"
				className="btn btn-primary"
				onClick={this.onSubmit}
				/>
               
            </div>
		);
	}
}
EditImagePage.propTypes = {
    image: PropTypes.object.isRequired,
    radius: PropTypes.number,
    angle:PropTypes.number,
    text: PropTypes.object.isRequired,
    filterEffect: PropTypes.string
}

const getImageByPublicId = (images, imageId) => {
    const image = Object.assign({}, images.find(image => image.name === imageId));
    return image;
}

const mapStateToProps = (state, ownProps) => {
    let image = {
		"_id":"",
		"url":"",
		"user_id":"", 
		"likes":"",
		"name":"",
	};
    const imageId = ownProps.match.params.id;
  
    const images = state.images;
    if (imageId && images.length > 0) {
        image = getImageByPublicId(images, imageId);
    }
    return {
        image: image,
        images: images
    };
}

function mapDispatchToProps(dispatch) {	
    return {
      actions: bindActionCreators(imageActions, dispatch)
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(EditImagePage)