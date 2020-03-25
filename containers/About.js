import React, { Component } from 'react';
import AboutContent from '../components/AboutContent';
import Hobbies from "../components/Hobbies";

class About extends Component{

	render(){
		return(
				<section id='about'>
						<p className="meta-title"> à propos de moi</p>	
						<h1 className="title-section">qui je suis ?</h1>
						<AboutContent />
						<Hobbies  />
				</section>
			);
	}
}

export default About