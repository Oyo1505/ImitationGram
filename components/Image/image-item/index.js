import React, {Fragment, useState} from 'react';

 const ImageItem = () => {

	const [toggle, setToggle] = useState(false);
	function onMouseOver(event){
		console.log('d')
		setToggle(!toggle);
	}
		return (
			
				<li className="thumbnail-image"  key={this.props.image._id}>
					<img src={this.props.image.url}  
					alt={this.props.image.name} 
					style={{ height: '100%', width: '100%'}}
					onMouseOver={()=>onMouseOver}
				/>
				,j
				</li>
			
		);
	}

export default ImageItem;