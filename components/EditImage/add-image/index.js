import React from 'react';
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

	uploadImage = async event => {
		const files = event.target.files;
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
		
	} 

	render() {
		const { loading, image} = this.state;
		return (
			<div data-test="addImageComponent">
				<p>Uplouad</p> 
				<input 
				type='file'
				name='file'
				onChange={this.uploadImage}
				/>
			
			{ loading ? 'loading...' : <img src={image.url} /> }
			</div>
		);
	}
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