import React from 'react';
import { connect } from 'react-redux';


class LikeButtonImage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            image: this.props.image,
            toggle: false
        }
    }
    
    toggle = () =>  {
        this.setState({ toggle: !this.state.toggle });
    }

    render() {
        const {toggle} = this.state;
        return(
            <div>
              <div className="item-header-content" onClick={this.toggle}> <i className={toggle ? 'icon icon-like-red' : 'icon icon-like'} ></i> <span style={{fontWeight: 'bold'}}> 350 likes</span> </div>

            </div>
        );
    };
};

const getImageById= (images, imageId)=>{
    const image = Object.assign({}, images.find(image => image._id === imageId))
    return image;
}
const mapStateToProps = (state, ownProps)=> {
    let image = {
		"_id":"",
		"url":"",
		"user_id":"", 
		"likes":"",
		"name":"",
	};

   let imageId = ownProps.imageId;
   let  images = state.images;

    if(imageId && images.lenght > 0){
        image = getImageById(images, imageId);
    }
    return{
        image : image,
    };

}
export default connect(mapStateToProps,null)(LikeButtonImage);