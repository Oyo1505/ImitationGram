import React, {Fragment} from 'react';
import Header from '../Header';
import ListImagesDiscover from "./list-images-discover";

const Discover = () => {
    function refreshPage () {
		window.location.reload(false);
	  }
	
		return (
            <div id="imitation-app">
           	 <div style={{ height: "5vh" }} className="container valign-wrapper">
                <Header  />
			    <div className="timeline" >
				<button onClick={refreshPage}>Click to reload!</button>
				<ListImagesDiscover  />
			    </div>
             </div>	
			</div>
        );	
};

export default Discover;