import React, { useState } from 'react';
import PropTypes from "prop-types";
import ModalImage from '../../Image/modal-image';


const ImageItem = (props) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);

   return ( 
         <li key={props.image._id}>
			 <div
			     className="thumbnail-image"
				 onClick={() => setShow(true)}
			 >
			<img 
			src={props.image.url}  
		    alt={props.image.name} 
		    />				
			</div>
			<ModalImage show={show} close={handleClose} image={props.image} />
		</li>	
    );
}

ImageItem.propTypes = {
	show: PropTypes.bool,
};

export default ImageItem;