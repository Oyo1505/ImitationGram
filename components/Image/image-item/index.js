import React, { Fragment, useState } from 'react';
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom";
import { deleteImage } from "../../../../actions/";
import { connect } from 'react-redux';

const ImageItem = (props) => {
    const [toggle, setToggle] = useState(false);

    function onMouseOverImage(event) {
        event.preventDefault();
		setToggle(!toggle);
    }
    async function onClickDeleteImage(imageId){
		props.deleteImage(imageId);
	}
	
   return (
        <li   key={props.image._id}	>
				<div className="thumbnail-image"
				onMouseOver={(event) => onMouseOverImage(event)}
				onMouseLeave={(event) => onMouseOverImage(event)}
				>
					<img src={props.image.url}  
					alt={props.image.name} 
					style={{
					height: '100%',
					width: '100%'
					}}
					
					/>
					<div className="overlay">
						<div className="btn-overlay-image" onClick={() => onClickDeleteImage(props.image._id)}> Delete </div>
					</div>
					
				</div>	
		</li>
		

    );
}

export default connect(null, {deleteImage})(withRouter(ImageItem));