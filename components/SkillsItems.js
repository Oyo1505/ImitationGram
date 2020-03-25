import React, { Component, Fragment } from 'react';
import {Trail, animated, interpolate} from 'react-spring/renderprops'
import SkillItem from './SkillItem';

class SkillsItems extends Component {
 	constructor(props){
 		super(props);
 		this.state = {
 			skills:[
 				{
 					name:'Intégration',
 					skillsItems: ['HTML 5', 'CSS', 'Bootstrap', 'Sass'],
 					className : 'icon-web-design',
 					color:'#FBFBFB'
 				},
 				{
 					name:'Développement',
 					skillsItems: ['Javascript', 'React'],
 					className : 'icon-code',
 					color:'#f45f5f'
 				},
 				{
 					name:'Autre',
 					skillsItems: ['Photoshop', 'Wordpress'],
 					className : 'icon-software',
 					color:'#f4da44'
 				},
 			]
 		}
 	}

	render(){
		const skills = this.state.skills;
		const toggle = this.props.toggle;
		return(
			<Fragment>
				<Trail
				native
				items={skills}
				keys={skill => `skill-${skill.name}`}
				from={{opacity: 0, y: 50}} 
		    	to={{ opacity:  1  , y: 0}}
				>
				{skill => ({opacity, y}) => (
					<animated.div 
					className="item-skill"
					style={{
				   		opacity,
	                	transform: y.interpolate(y => `translate3d(0,${y}%,0)`),
				   	}}>
						<SkillItem key={`skill-item-${skill.name}`} skill={skill} />
					</animated.div>
				)}
				</Trail>
			</Fragment>
			)
		}
}

export default SkillsItems
