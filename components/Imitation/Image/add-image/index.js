import React,{Fragment, useState } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone'
import classNames from 'classnames';
import { Modal, ModalBody, ModalFooter} from 'react-bootstrap';
import loadingGif from '../../../../images/loading.gif';
import {bindActionCreators} from 'redux';
import {checkExtensionFile, getUserById } from '../../../../Utilities';
import * as courseActions from "../../../../actions/";
import  { connect } from 'react-redux';
import styled from 'styled-components';

const imagesLocaleStorage = [];
const imageMaxSize = 2000000; //bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif';
const acceptedFileTypesArray = acceptedFileTypes.split(",").map(function(item) {return item.trim()});

const getColor = (props) => {
	if (props.isDragReject) {
		return '#c66';
	}
	if (props.isDragActive) {
		return '#6c6';
	}
	return '#666';
  };

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-radius: 5px;
  border-color: ${props => getColor(props)};
  border-style: ${props => props.isDragReject || props.isDragActive ? 'solid' : 'dashed'};
  background-color: ${props => props.isDragReject || props.isDragActive ? '#eee' : ''};
  display:grid;
  place-items:center;
`;

class AddImage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			image:this.props.image,
			loading: false,
		}
	}

	verifyFile(files){
		if( files && files.length > 0){
			const currentFile = files[0]
			const currentFileType = currentFile.type
			const currentFileSize = currentFile.size
			if(currentFileSize > imageMaxSize){
				alert("this file is not allowed"+ currentFileSize + "bytes is too large");
				return false;
			}
			if(!acceptedFileTypesArray.includes(currentFileType)){
			alert("this file is not allowed. Only image is allowed ")
			return false;
			}

			return true;
		}
	}
	 handleOnDrop = (files, rejectedFiles )=>{		
		if( rejectedFiles && rejectedFiles.length > 0){
			this.verifyFile(rejectedFiles);
		}
		if( files && files.length > 0 && this.state.loading === false){
			const isVerified = this.verifyFile(files);
			if(isVerified){	
				this.onUpdate(files)
			}
		}	
	}
	
	  onUpdate = async files =>{
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
					likes:[],
					comments:[],
					name :this.replacePublicIdImage(file.public_id),
				},
				loading:false
			});
			this.props.actions.addImage(this.state.image);
		}
	}
	replacePublicIdImage = (publicId) => {
		if(publicId){
			let newStr = publicId.replace('imitationGram/', "");
			return newStr;
		}
	}
	 handleClose =()=>{
		this.props.close(false)
	}
	render() {
		const { image, loading} = this.state;
	
		return (
		<>
			{ loading ? (
				<img src={loadingGif} />
				)
				: (
				<Fragment>
			<Modal animation={false} size="xl" show={this.props.show} onHide={this.handleClose} dialogClassName="modal-90w"  centered	>
			<ModalBody className="modal-body-imitation">
		
			<Dropzone
			onDrop={this.handleOnDrop}
			multiple={false}
			maxSize={imageMaxSize}
			accept={acceptedFileTypes}
			>
			{({getRootProps, getInputProps, isDragActive, isDragReject}) => {
							 return (
				 <Container
					isDragActive={isDragActive}
					isDragReject={isDragReject}
					{...getRootProps()}
					 >
						<div
						{...getRootProps()}
						className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
						 >
						<input {...getInputProps()}/>
						{
						 <p>Drag your file here ! :)</p>
						 }
					 </div>
					</Container>
					 )
					 }}
				</Dropzone>
				
			</ModalBody>
			</Modal>
			</Fragment>
			)
		}
		</>
	);
	}
}

AddImage.propTypes = {
	actions: PropTypes.object.isRequired,
	image: PropTypes.object.isRequired,
	loading : PropTypes.bool
}

const mapStateToProps = (state) => {
	let image = {
		'_id':"",
		"url": "",
		'name':"",
		'user_id':"",
		'likes':[],
	}
	return{
		auth:state.auth,
		image,
	}
}

function mapDispatchToProps(dispatch) {	
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStateToProps , mapDispatchToProps)(withRouter(AddImage));