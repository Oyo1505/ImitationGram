import React, { Fragment } from 'react';
import classNames from 'classnames'
import  Modal from 'react-bootstrap/lib/Modal';
import Dropzone from 'react-dropzone'
import styled from 'styled-components';

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
`;



const imageMaxSize = 100000; //bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif';
const acceptedFileTypesArray = acceptedFileTypes.split(",").map(function(item) {return item.trim()});

export default class DragImage extends React.Component {

	constructor(props) {
		super(props);

		  this.verifyFile = this.verifyFile.bind(this);
		  this.handleOnDrop = this.handleOnDrop.bind(this);
		   this.toggle = this.toggle.bind(this);
		  this.state = { end : true }

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

  		handleOnDrop(files, rejectedFiles){
  			
  			if( rejectedFiles && rejectedFiles.length > 0){
  				this.verifyFile(rejectedFiles);
  			}

  			if( files && files.length > 0){
  				const isVerified = this.verifyFile(files);
  				if(isVerified){
  					//imageBase64Data

  					const currentFile = files[0];
  					const myFilItemReader = new FileReader();
  					myFilItemReader.addEventListener('load', ()=>{
  						
  						this.props.onUpdate(myFilItemReader.result)
  					}, false);

  					myFilItemReader.readAsDataURL(currentFile);
  				}
  			}	
  			
  		}

  	toggle(){

			this.setState({end: !this.state.end});
		};

	render() {
		return (
			<>
				<Modal show={this.props.end} onHide={this.toggle}
							size="lg"  

							aria-labelledby="contained-modal-title-vcenter"
						    centered
							>
								<Modal.Header closeButton>
									<Modal.Title>Upload an  Image</Modal.Title>
								</Modal.Header>
								<Modal.Body 	className="modal-imitation">
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
								              <input {...getInputProps()} />
								              {
								                <p>Drag your file here ! :)</p>
								              }
								            </div>
								          </Container>
								          )
								        }}
								</Dropzone>
								</Modal.Body>
							</Modal>
			</>
		);
	}
}
