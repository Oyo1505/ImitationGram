import React, {Fragment} from 'react';

 class ImageItem extends React.Component {


	render() {
		return (
			
				<li className="thumbnail-image"  key={this.props.image._id}>
					<img src={this.props.image.url}  
					alt={this.props.image.name} 
					style={{ height: '100%', width: '100%'}}
				/>
				</li>
			
		);
	}
}
export default ImageItem;