import React,{Fragment} from 'react';
import PropTypes from 'prop-types'
import loadingGif from '../../../../images/loading.gif';
import {checkExtensionFile, getUserById } from '../../../../Utilities';
import { addImage ,editUser } from "../../../../actions/";
import  { connect } from 'react-redux';
 
class AddImage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			image:this.props.image,
			loading: false,
			user:this.props.user
		}
	}



	uploadImage = async event => {

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
					name:file.public_id,
				},
				loading:false
			});

			this.props.addImage(this.state.image);

		}else{
			//TODO MAKE A BETTER ALERT FOR WRONG FORMAT FILE
			alert('wrong format must be .png .jpeg .jpg');
			event.target.value = '';
		}
		
		
	} 

	render() {
		const { loading, image} = this.state;
		return (
			<div data-test="addImageComponent">
				<p>Upload</p> 
				<input 
				type='file'
				name='file'
				onChange={this.uploadImage}
				/>
			<br/>
			{ loading ? (

				<img src={loadingGif} alt="loading-gif"/>
				)
				: (
				<Fragment>
					<img src={image.url} alt="image-uploaded" /> 
				</Fragment>
				)
			
			}
			</div>
		);
	}
}

AddImage.propTypes = {
	auth: PropTypes.object.isRequired,
	image: PropTypes.object.isRequired,
	addImage: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	let image = {
		'_id':'',
		'name':'',
		'user_id':'',
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
		user: user

	}

}
export default connect(mapStateToProps, {addImage})(AddImage);