import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import search from '../images/search.png';
import cuttingEdge from '../images/cutting_edge.jpg';
import {  Link } from "react-router-dom";

class Portfolio extends Component{

	constructor(){
		super();
		this.state = {
			projects: [],
			toggle:false,

		};
		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
	}
	onMouseEnter(){
		this.setState({toggle : true})
	}
	onMouseLeave(){
		this.setState({toggle : false})
	}
	getProjects(){
		this.setState({projects:
			[
				{
					id: 1,
					name: 'ImitationGram',
					route:true,
				},
				{
					id: 2,
					name:'Tetris',
					route:true,
				},
				{
					id: 3,
					name:'Kamelott Box',
					route:true,
				},
				
			],
			
		});
	}

	componentWillMount(){
			this.getProjects();
	}
	render(){
 let toggle = this.state.toggle;

		return(
			<section >
						<p className="meta-title">Mes Projets récent</p>	
						<h1 className="title-section">Portfolio</h1>
						<p className="meta-title">React/Redux</p>
							<div className='portfolio-items'>
							<Spring
							
							config={{tension: 550, fiction: 58, precision: 0.5, clamp: false, easing: 'd3-ease' }}
							from={{ transform :'scale(1)' }}
      						to={{ transform: toggle ? 'scale(1) ': 'scale(1)' }}
							>
							{props => ( 	
								<div 
								onMouseEnter={() => this.onMouseEnter()} 
								onMouseLeave={()=> this.onMouseLeave()}
								style={props}
								className="portfolio-item">
									<Link to="/kaamelott">
										<div className="picture-content">
											<img src={search} alt="brackets code" /> 
										</div>
										<span>Kamelott Soundbox</span>
									</Link> 
								</div>
								
							)}
							</Spring>
								<div   className="portfolio-item"><Link to="/imitationgram"><div className="picture-content"><img src={search}alt="brackets code" /> </div><span>ImitationGram</span></Link> </div>
								<div   className="portfolio-item"><Link to="/search-app"><div className="picture-content"><img src={search} alt="brackets code" /> </div><span>Search app</span></Link> </div>
								<div   className="portfolio-item"><Link to="/dj-youtube"><div className="picture-content"><img src={search} alt="brackets code"/> </div><span>DJ Youtube</span></Link> </div>
							</div>
							<p className="meta-title">Wordpress</p>
						 	<div className="portfolio-items"> 
							 <div   className="portfolio-item"><a href="https://cuttingedge.fr/"><div className="picture-content"><img src={cuttingEdge}alt="cutting edge" /> </div><span>Cutting Edge</span></a> </div>
						 	</div>	
			</section>
					
			);
	}
}

export default Portfolio
