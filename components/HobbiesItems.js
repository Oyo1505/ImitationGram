import React, {Component, Fragment} from 'react';
import {Trail, animated, interpolate} from 'react-spring/renderprops'
import HobbyItem from './HobbyItem';

class HobbiesItems extends Component{

constructor(props){
	super(props);
	this.state = { hobbies: [
 			{
 				name: 'Astronomie',
 				className: 'saturn',
 				color: '#C11714'
 				
 			},
 			{
 				name: 'Vinyl',
 				className: 'vinyl',
 				color: '#49D295'
 				
 			},
 			{
 				name: 'Cinéma',
 				className: 'camera',
 				color: '#FCA120'
 				
 			},
 			{
 				name: 'Science',
 				className: 'atomic',
 				color: '#0B2239'
 				
			 }
 	]}
}
   
 	render(){
 		const hobbies =	this.state.hobbies;
 
	  return (
		    <Fragment>
		    	<Trail 
		    	native
		    	items={hobbies} 
		    	keys={hobby => `hobby-${hobby.name}`} 
		    	from={{opacity: 0, x: -50}} 
		    	to={{ opacity:  1 , x:  0 }}
		    	>
				  {hobby => ({ x, opacity }) => ( 
				   <animated.div 
				   	className="hobbie-item" 
				   	style={{
				   		'borderBottom' : `2px solid ${hobby.color}`,
				   		 opacity,
	                	transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
				   	}} > 
				   	<HobbyItem hobby={hobby} /> 
				   </animated.div>
				)}
				</Trail>
		    </Fragment>
 		 )
 	}

}

export default HobbiesItems;