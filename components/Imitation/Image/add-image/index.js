import React,{Fragment} from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import loadingGif from '../../../../images/loading.gif';
import {bindActionCreators} from 'redux';
import {checkExtensionFile, getUserById } from '../../../../Utilities';
import * as courseActions from "../../../../actions/";
import  { connect } from 'react-redux';

const imagesLocaleStorage = [];

class AddImage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			image:this.props.image,
			loading: false,
			user:this.props.user,
			images:this.props.images
		}
	}
	componentDidMount= () =>{
        /*set item to LocalStorage*/
        const image = this.state.image;
      	this.setImageToLocalStorage(image);
	}
	uploadImage = async event => {
		event.preventDefault();
		const files = event.target.files;

		if(checkExtensionFile(files[0].name)){
			const data = new FormData();
			data.append('file', files[0]);
			data.append('upload_preset', 'imitationGram');

			this.setState({ loading : true});

			const res = await fetch('https://api.cloudinary.com/v1_1/dtjpoyvv5/image/upload', {
				method: 'POST',
				body:data,
				
			});
			
			const file = await res.json();
			
			this.setState({
				image: {
					url:file.secure_url,
					user_id: this.props.auth.user._id,
					likes:0,
					name :this.replacePublicIdImage(file.public_id),
				},
				loading:false
			});
			
			this.props.actions.addImage(this.state.image);

		}else{
			//TODO MAKE A BETTER ALERT FOR WRONG FORMAT FILE
			alert('wrong format must be .png .jpeg .jpg');
			event.target.value = '';
		}
		
		
	} 
	setImageToLocalStorage = (image) =>  {
		imagesLocaleStorage.push(image);
        const image_json = JSON.stringify(imagesLocaleStorage);
        localStorage.setItem("imagesImitation", image_json)
	}
	replacePublicIdImage = (publicId) => {
		if(publicId){
			let newStr = publicId.replace('imitationGram/', "");
			return newStr;
		}
	}

	render() {
		const { loading, image} = this.state;
	
		return (
			<div style={{ height: "5vh" }} className="container valign-wrapper" data-test="editUserComponent">
			
				<div data-test="addImageComponent">
					<p>Upload</p> 
					<input 
					type='file'
					name='file'
					onChange={this.uploadImage}
					/>
				<br/>
				{ loading ? (

					<img src={loadingGif} />
					)
					: (
					<Fragment>
						<img className="image-upload" src={image.url} /> 
					</Fragment>
					
					)
				}
				</div>
			</div>
		);
	}
}

AddImage.propTypes = {
	actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
	let image = {
		'_id':"",
		'name':"",
		'user_id':"",
		'likes':0,
	}
	let user = {  
	  "_id": "",
      "name": "",
      "email": "",
      "images_id": [],
     };      

	const userId = state.auth.user._id;
	const users = state.users

	if(userId && users.length > 0 ){
		 user = getUserById(users, userId);
	}
	return{
		auth:state.auth,
		image:image,
		images:state.images,
		user: user

	}
}

function mapDispatchToProps(dispatch) {	
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStateToProps , mapDispatchToProps)(withRouter(AddImage));