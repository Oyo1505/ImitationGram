import React,{Fragment} from 'react';
import PropTypes from 'prop-types'
import loadingGif from '../../../../images/loading.gif';
import { addImage } from "../../../../actions/";
import  { connect } from 'react-redux';
 
class AddImage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			image:this.props.image,
			loading: false,
		}
	}

	checkExtensionFile = (string) => {

		let reRegex = /([a-zA-Z0-9\s_\\.\-\(\):])+(.jpg|.jpeg|.png)$/i;
		let testStringRgx = reRegex.test(string);

		return testStringRgx;
	}

	uploadImage = async event => {
		const files = event.target.files;
	 
		if(this.checkExtensionFile(files[0].name)){
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

			this.props.addImage(this.state.image)
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
	return{
		auth:state.auth,
		image:image
	}

}
export default connect(mapStateToProps, {addImage})(AddImage);