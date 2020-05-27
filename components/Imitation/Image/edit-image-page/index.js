import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import Header from '../../Header';
import {Spring, config} from 'react-spring/renderprops';
import { SketchPicker } from 'react-color';
import {Image, Transformation } from 'cloudinary-react';
import { bindActionCreators } from 'redux';
import filters from '../../../../json/filters';
import imageEffects from '../../../../json/imageEffects';
import colorEffects from '../../../../json/colorEffects';
import sizePolice from '../../../../json/sizePolice'
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
            filterEffect:'',
            imageEffects:{
                effect:'',
                rangeEffect:50
            },
            colorEffects:{
                colorEffect:'',
                rangeEffect:50
            },
            text:{
                content:'',
                fontFamily:'',
                fontSize:20,
                color:'',
                textDecoration:'',
                fontWeight:'',
                fontStyle:'',
                gravity:''
            },
        };
    
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        return this.state != nextState;
    }
    copyTheCurrentObject = (object) => {
        let cloneImage = Object.assign({},object);
        return cloneImage;
    }

    handleChangeColorText = (color) => {
        let newImage = this.copyTheCurrentObject(this.state.image);
        let copyStateText = this.copyTheCurrentObject(this.state.text);
        newImage.url = this.image.state.url;
        copyStateText["color"] = color.hex;
        this.setState({ 
            image:newImage,
            text:copyStateText })
      };
    handleSelectFilter = (event) => {
        event.preventDefault();
        let newImage = this.copyTheCurrentObject(this.state.image);
        this.setState({
             image:newImage,
             filterEffect: event.target.value
         });
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
         });
     }

     handleImageEffect = (event) => {
        event.preventDefault();
        let newImage = this.copyTheCurrentObject(this.state.image);
        let copyStateImageEffect = this.copyTheCurrentObject(this.state.imageEffects);
        newImage.url = this.image.state.url;
        copyStateImageEffect[event.target.name]=event.target.value;
        this.setState({
            image:newImage,
            imageEffects:copyStateImageEffect
        });
     }

     handleColorEffect = (event) => {
        event.preventDefault();
        let newImage = this.copyTheCurrentObject(this.state.image);
        let copyStateColorEffect = this.copyTheCurrentObject(this.state.colorEffects);
        newImage.url = this.image.state.url;
        copyStateColorEffect[event.target.name]=event.target.value;
        this.setState({
            image:newImage,
            colorEffects:copyStateColorEffect
        });
     }

     onSubmit = (event) => {
        event.preventDefault();
        let newImage = this.copyTheCurrentObject(this.state.image);
        newImage.url = this.image.state.url;
        this.props.actions.updateImage(newImage);
        this.props.history.push('/imitationgram');
    }
    ref = image => {
        this.image = image
    }
	render() {
        const fontWeights = [{"id": 0, weight:"normal" },{"id": 1, weight:"bold" },{"id": 2, weight:"thin" },{"id": 3, weight:"light" }];
        const textDecorations = [{"id": 0, textDecoration:"normal" },{"id": 1, textDecoration:"underline" },{"id": 2, textDecoration:"strikethrough" }];
        const positions = [{"id": 0, gravity:"center" },{"id": 1, gravity:"north" },{"id": 2, gravity:"west" },{"id": 2, gravity:"east"},{"id": 2, gravity:"south" }];
        
        return (
            <Fragment>
            <div style={{ height: "5vh" }} className="container valign-wrapper" data-test="editImageComponent">
				<Header />
                <div>
                <Image 
                ref={this.ref}
                cloudName={process.env.CLOUDINARY_NAME}
                publicId={`imitationGram/${this.state.image.name}`}
                
                >
                   <Transformation width="500" quality="100" />
                   {this.state.text.content &&
                    <Transformation width="500"  
                        overlay={{fontFamily: "Arial", 
                                  fontSize: this.state.text.fontSize, 
                                  text: this.state.text.content,
                                  fontWeight: this.state.text.fontWeight,
                                  textDecoration: this.state.text.textDecoration
                                    }} 
                        color={this.state.text.color}
                        gravity={this.state.text.gravity}  
                        crop="fit"/>
                    } 

                    {this.state.imageEffects.effect && 
                     <Transformation effect={`${this.state.imageEffects.effect}:${this.state.imageEffects.rangeEffect}`} />
                     }
                    {this.state.colorEffects.colorEffect && 
                     <Transformation effect={`${this.state.colorEffects.colorEffect}:${this.state.colorEffects.rangeEffect}`} />
                     }
                    {this.state.filterEffect &&
                    <Transformation effect={`art:${this.state.filterEffect}`} />
                    }

                </Image>
                </div>
                
                <SelectInput label="Color Effect" name="colorEffect"  values={colorEffects} title="colorEffect" onChange={this.handleColorEffect} />   
                {this.state.colorEffects.colorEffect && 
                     <Spring
                     config={config.molasses}
                     from={{ opacity: 0 }}
                     to={{ opacity: 1 }}
                     >
                     {props => (
                          <Fragment>
                         <div style={props} >
                            <RangeInput label="Color range"  min="0" max="100" value={this.state.colorEffects.rangeEffect} name="rangeEffect" onChange={this.handleColorEffect} />
                         </div>
                        </Fragment>
                        )}
                    </Spring>    
                }
                <SelectInput label="Image Effect" name='effect'  values={imageEffects} title="effect" onChange={this.handleImageEffect} />
                {this.state.imageEffects.effect && 
                     <Spring
                     config={config.molasses}
                     from={{ opacity: 0 }}
                     to={{ opacity: 1 }}
                     >
                     {props => (
                          <Fragment>
                         <div style={props} >
                            <RangeInput label="Image range"  min="0" max="100" value={this.state.imageEffects.rangeEffect} name="rangeEffect" onChange={this.handleImageEffect} />
                         </div>
                        </Fragment>
                        )}
                    </Spring>    
                }
                <SelectInput label="Filter"  name='select' values={filters} title="filter" onChange={this.handleSelectFilter} />
                <TextInput label="Text" name='content' placeholder="Votre texte" value={this.state.text.content} onChange={this.handleTextInput} />
              
                {this.state.text.content && 
                    <Spring
                    config={config.molasses}
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    >
                    {props => (
                         <Fragment>
                        <div style={props} >
                        <SelectInput label="Police size" name='fontSize'  values={sizePolice} title="size" onChange={this.handleTextInput} /> 
                        <SelectInput label="Police weight" name='fontWeight'  values={fontWeights} title="weight" onChange={this.handleTextInput} />
                        <SelectInput label="Text Decoration" name='textDecoration'  values={textDecorations} title="textDecoration" onChange={this.handleTextInput} />  
                        <SelectInput label="Position" name='gravity'  values={positions} title="gravity" onChange={this.handleTextInput} />  
                        <SketchPicker color={ this.state.text.color }  onChange={ this.handleChangeColorText } />
                        </div>
                        </Fragment>
                    )}
                    </Spring>
                }
                
                <input 
			    type="submit"
				className="btn btn-primary btn-edit-image"
				onClick={this.onSubmit}
				/>
               
            </div>
            </Fragment>
		);
	}
}
EditImagePage.propTypes = {
    image: PropTypes.object.isRequired,
    radius: PropTypes.number,
    angle:PropTypes.number,
    text: PropTypes.object,
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