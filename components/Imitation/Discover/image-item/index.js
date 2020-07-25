import React, { useState } from 'react';
import PropTypes from "prop-types";
import ModalImage from '../../Image/modal-image';


const ImageItem = (props) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);

   return ( 
         <div key={props.image._id} style={{margin: "0 auto"}}>
			 <div
			     className="thumbnail-image-discover"
				 onClick={() => setShow(true)}
			 >
			<img 
			src={props.image.url}  
		    alt={props.image.name} 
		    />				
			</div>
			<ModalImage show={show} close={handleClose} image={props.image} />
		</div>	
    );
}

ImageItem.propTypes = {
	show: PropTypes.bool,
};

export default ImageItem;