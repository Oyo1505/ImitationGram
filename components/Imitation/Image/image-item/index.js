import React, {useState } from 'react';
import { withRouter } from "react-router-dom"
import ModalImage from '../modal-image';
import { Link } from "react-router-dom";
import { deleteImage } from "../../../../actions/";
import { connect } from 'react-redux';


const ImageItem = (props) => {
	const [toggle, setToggle] = useState(false);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
  
    function onMouseOverImage(event) {
        event.preventDefault();
		setToggle(!toggle);
    }
    async function onClickDeleteImage(imageId){
		props.deleteImage(imageId);
	}
	function getUserbyId(authId, userId) {
		if(authId === userId){
			return true;
		}else{
			return false
		}
	}
   return (
        <li   key={props.image._id} >
				<div 
				className="thumbnail-image"
				onClick={() => setShow(true)}
				>
					<img src={props.image.url}  
					alt={props.image.name} 
					/>
					<div className="overlay">
						{getUserbyId(props.match.params.id, props.auth.user._id) &&
						<>
							<div className="btn-overlay-image"><Link to={`/edit-image/${props.image.name}`}> Edit </Link></div>
							<div className="btn-overlay-image" onClick={() => onClickDeleteImage(props.image._id)}> Delete </div>
						</>
						}
					</div>				
				</div>	
				
				<ModalImage show={show} close={handleClose} image={props.image} />
		</li>
    );
}
const mapStateToProps = (state) => {
	return{
		auth: state.auth 
	}
}
export default connect(mapStateToProps, {deleteImage})(withRouter(ImageItem));