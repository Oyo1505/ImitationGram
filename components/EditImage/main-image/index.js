import React from 'react';
import axios from 'axios'


class Photo extends React.Component {


  	handleUploadImages = image => {
    // uploads is an array that would hold all the post methods for each image to be uploaded, then we'd use axios.all()
		    //console.log(image)
		      // our formdata
		      const formData = new FormData();
		      formData.append("file", image);
		      formData.append("upload_preset", "imitationGram"); // Replace the preset name with your own
		      formData.append("api_key", "yMs7_6lKwUGubKtX1W5o1oHgVf8"); // Replace API key with your own Cloudinary API key

		      // Replace cloudinary upload URL with yours
		      return axios.post(
		        "https://api.cloudinary.com/v1_1/dtjpoyvv5/image/upload",
		        formData, 
		        { headers: { "X-Requested-With": "XMLHttpRequest" }})
		        .then(response => console.log(response.data))


		    // We would use axios `.all()` method to perform concurrent image upload to cloudinary.
		    axios.all(image).then(() => {
		      // ... do anything after successful upload. You can setState() or save the data
		      console.log('Images have all being uploaded')
		    });
		  }


	render() {
		let filtersMap

		filtersMap = this.props.styleFilters.map(function(filt){
			return( `${filt.name}(${filt.value}${filt.type})` );
		}).join(" ");

		return (
			<div>
				<figure style={{filter: `${filtersMap}`}} 
					className='filter'>
					<img src={this.props.photo} className={this.props.filter} alt="image-photo-imitation" />
				</figure>
						
					
				
			</div>
		);
	}
}
export default Photo