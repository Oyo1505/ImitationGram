import React, { Fragment, useState, set } from 'react';
import PropTypes from "prop-types";
import LikeButtonImage from "../../Image/like-button-image";
import { useSpring, animated, config, interpolate } from 'react-spring';
import ImageHeaderTimeline from '../image-header-timeline';


const ImageItemTimeline = (item) => {
	const [state, toggle] = useState(false)
	const { x } = useSpring({ from: { x: 0 }, x: state ?  1 : 0, config: { duration: 350 } })
	const { y } = useSpring({ from: { y: 0 }, y: state ? 1 : 0, config: { duration: 350 } })
	const { s } = useSpring({ from: { s: 0 }, s: state ? 1 : 0, config: { duration: 350 } })
	return (
		<div key={item.image._id} 
		onMouseEnter={() => toggle(!state)}
		onMouseLeave={() => toggle(!state)}
		className="thumbnail-image-timeline">
		
		<animated.div 
				style={{
					width: '450px', 
					height:'400px', 
					borderRadius:'11px',
					backgroundColor: '#f7f6f4',
					margin: '25px 0',
					boxShadow: 'rgba(0, 0, 0, 0.25) 6px 8px 20px',
					transform: interpolate(
						[
						x.interpolate({ 
							range: [0, 0.5, 1],
							output: [0, 12, 0],
						 
						}),
						 y.interpolate({ 
							range: [0, 0.5, 1],
							output: [0, -12, 0],
					
						}),
						 s.interpolate({ 
							range: [0, 1],
							output:  [1, 1.05],
							extrapolate: 'clamp'
						})
						],	
						(x, y, s) => `rotateX(${x}deg) rotateY(${y}deg) scale(${s}) translateZ(0px)`
					)}}
				>
					<ImageHeaderTimeline userId={item.image.user_id} />
					<div className="image-content-timeline" >
						<img  src={item.image.url}  
						alt={item.image.name} />
					</div>
					
					<div>
						<LikeButtonImage imageId={item.image._id} />
						comments
					</div>
			</animated.div>	
		</div>
    );
}

ImageItemTimeline.propTypes = {
    state: PropTypes.bool
}


export default ImageItemTimeline;