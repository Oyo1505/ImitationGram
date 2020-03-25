import React, { Component, Fragment } from 'react';
import {  Link } from "react-router-dom";


class PortfolioItem extends Component {

	render(){

		return(
			<Fragment>	
							
							 <Link to="/kaamelott"><div className="picture-content"><img src={this.props.project.src} alt="logo-code"/> </div><span>{this.props.project.name}</span></Link> 
							<Link to="/imitationgram"><div className="picture-content"><img src={this.props.project.src} alt="logo-code" /> </div><span>{this.props.project.name}</span></Link>
							<Link to="/battlecard"><div className="picture-content"><img src={this.props.project.src} alt="logo-code" /> </div><span>{this.props.project.name}</span></Link> 
				
			</Fragment>		
			);
	}
}

export default PortfolioItem