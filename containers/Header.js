import React, { Component, Fragment } from 'react';
import { Spring, config } from 'react-spring/renderprops';
import Nav from "../components/Nav"
import code from '../images/code.jpg'

class Header extends Component {



    render() {

        const { title, background } = this.props;
        return (
            <header>

						
							
						 	{!background && 
						 		<Fragment>
						 		<div className='carousel-box'>
						 			<div className='pixel-overlay'></div>
									<h1>Henri-Pierre RIGOULET <br /> Intégrateur - Développeur Web</h1>
						 			<img  margin={0} className='image-fixed' alt="1920x750" src={code}  />
						 		</div>	
						 		<Nav />	
						 		</Fragment>
						 	}
						 	{background && 
						 		<>
								<Spring
								config={config.molasses}
						        from={{ marginTop: -80, opacity: 0 }}
     							to={{ marginTop: 0, opacity: 1 }}
						       	duration={3200}
								>
								{props => (
										
						 			<>
							 		<div style={props} className='carousel-box'>
							 			<div className='pixel-opacity'></div>
							 			<h1>{title}</h1>
							 			<img  margin={0} className='image-fixed' alt="1920x750" src={`https://image.tmdb.org/t/p/w1400_and_h450_face${background}`}  />
							 		</div>
						 			</>
								 )}
								</Spring>	
								</>
						 	}
						 	
						
						
						
				</header>

        );
    }
}

export default Header
