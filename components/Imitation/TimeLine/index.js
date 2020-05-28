import React, {Fragment} from 'react';
import ListImagesTimeline from "./list-images-timeline";

class Timeline extends React.Component {
    refreshPage() {
		window.location.reload(false);
	  }
	render() {
		return (
			<div className="timeline" >
				<button onClick={this.refreshPage}>Click to reload!</button>
				<ListImagesTimeline  />
				
			</div>
		);
	}
}

export default Timeline;