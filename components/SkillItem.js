import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import 'react-circular-progressbar/dist/styles.css';



class SkillItem extends Component {
	constructor(props){
		super(props);
	}
	render(){
		const skillsItems = this.props.skill.skillsItems;
		let items;
		if(skillsItems){
			items = skillsItems.map(item => {
				return <p>{item}</p>;
			})
		}
    return(
    	<Fragment>
			<span className="icons-skills" >
				<i className={`icon ${this.props.skill.className}`}></i>
				</span>
			<div className="desc centered">
				<h3>{this.props.skill.name}</h3>
				{items}
			</div>
		</Fragment>
		
   );

	}
}
export default SkillItem;