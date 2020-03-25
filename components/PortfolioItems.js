import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem'

class PortfolioItems extends Component {

	render(){
			var projectItems;

			if(this.props.projects){
				 projectItems = this.props.projects.map(project => {
				
				   return	<div key={project.name}  className="portfolio-item"><PortfolioItem project={project}  src={project.src} /></div>;		
				})
			}
		return(
					<div className='portfolio-items'>
						{projectItems}
					</div>
			);
	}
}

export default PortfolioItems