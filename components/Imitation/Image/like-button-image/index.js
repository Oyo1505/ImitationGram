import React, {useState} from 'react';
import * as imageActions from "../../../../actions/";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

const LikeButtonImage =(props) =>{
    const [image, setImage] = useState(props.image);

    function copyTheCurrentObject (object) {
        let cloneObject = Object.assign({},object);
        return cloneObject;
    }
    function actionOnLikesArray (id){
        let imageCopy = copyTheCurrentObject(image);
         if(!imageCopy.likes.includes(id) || imageCopy.likes.includes(id) === undefined){
            imageCopy.likes.push(id);
            return imageCopy;
        }else if(imageCopy.likes.includes(id)){
            let indexSuscribed =  imageCopy.likes.findIndex(index => index === id);
            imageCopy.likes.splice(indexSuscribed, 1 );
            return imageCopy; 
        }
    }
  function  onClickOnLikeButton(){
    event.preventDefault();
    let imageCopy = actionOnLikesArray(props.auth.user._id);
    setImage(imageCopy);
    props.actions.updateImage(image);
    }
    console.log(props.auth)
    return(
            <div>
                {props.auth.isAuthenticated &&  
                  <>
                    <div className="item-header-content" onClick={onClickOnLikeButton}>
                    <i className={image.likes.includes(props.auth.user._id) ? 'icon icon-like-red' : 'icon icon-like'} ></i> <span style={{fontWeight: 'bold'}}>{image.likes.length} like(s)</span> 
                    </div>
                 </>
                  }
                {!props.auth.isAuthenticated && 
                    <>
                    <div className="item-header-content">
                    <i className='icon icon-like' ></i> <span style={{fontWeight: 'bold'}}>{image.likes.length} like(s)</span> 
                    </div>
                    </>
                  }
                </div>
          
        );
  
};
LikeButtonImage.propTypes = {
    image : PropTypes.object.isRequired,
    user : PropTypes.object.isRequired
}
const getImageById= (images, imageId)=>{
    const image = Object.assign({}, images.find(image => image._id === imageId))
    return image;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(imageActions, dispatch)
    }
}
const mapStateToProps = (state, ownProps)=> {
    let image = {
		"_id":"",
		"url":"",
		"user_id":"", 
		"likes":[],
		"name":"",
	};

   let imageId = ownProps.imageId;
   let  images = state.images;
    if(imageId && images.length > 0){
        image = getImageById(images, imageId);
    }
   
    return{
        auth: state.auth,
        image
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(LikeButtonImage);