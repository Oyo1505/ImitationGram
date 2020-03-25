import React, { Component } from 'react';
import SkillsItems from "../components/SkillsItems";
import responsive from '../images/responsive.png';
import programming  from '../images/programming.png';
import webpack  from '../images/webpack.png';
import sublime  from '../images/subli.png';
class Skills extends Component{
	render(){
		return(
				<section id='skills' >
						<p className="meta-title" > ma spécialité</p>	
						<h1 className="title-section">Mes Compétences</h1>
						<div className="skills-web" ref="skills" >
							<SkillsItems />
						</div>
						<div className="design">
							<div className="design-skills">
									<img src={programming} alt="programming"/><p className="hobby-title">Intégration de maquette PSD </p>
							</div>
							<div className="design-skills">
								<img src={responsive} alt="responsive"/><p className="hobby-title">Responsive Design</p>
							</div>
							<div className="design-skills">
								<img src={webpack} alt="responsive"/><p className="hobby-title">Webpack</p>
							</div>
							<div className="design-skills">
								<img src={sublime} alt="responsive"/><p className="hobby-title">Sublime Text 3</p>
							</div>
						<div className="clear"></div>
						</div>
				</section>
			);
	}
}

export default Skills