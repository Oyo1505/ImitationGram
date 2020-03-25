import React, { Component, Fragment } from 'react';

class VideosItems extends Component {
	
    componentWillMunt = () => {
        fetch(`https://api.themoviedb.org/3${this.props.match.url}/videos?api_key=d62acee627fa0503830a6e257e522480&language=en-US`)
            .then(response => response.json())
            .then(json => this.setState({ video: json }));
    }
    render() {
        const video = this.props.video
        return (
            <Fragment>
	    	
	    	{!video.results &&
				<p>Pas de video disponible pour ce film</p>
			}
			{video.results.map(vid => (	
				<div  className="item-video"  key={vid.key} >
					<embed 
					  className='testH'			 
					  src={`https://www.youtube.com/embed/${vid.key}`} 
					  allowFullScreen />
				</div>
				))
			}

    </Fragment>
        )
    }
}

export default VideosItems;