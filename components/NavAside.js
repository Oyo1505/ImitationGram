import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import NavItems from './NavItems';
import Cv from '../CV/CV_RIGOULET.pdf';

const Button = styled.button `
min-height: 54px;
transition: 0.25s;
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  
  &:hover,
  &:focus{ 
   
    box-shadow: inset 0 0 0 2em  #23aebd;
    color: #fff;
    a{

		font-size: 1.1rem;
		text-decoration: none;
    	color: #fff;
    }
  }
  @media only screen and (min-width: 768px){
    padding: 1em 2em;
  }
 `;
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 4) / 20, 1.1]
const trans = (x, y, s) => `perspective(300px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function NavAside (props){
	
 const [propsGeo, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
 const handlePages = index => {
     props.handlePages(index);
  }
		return (
			<aside id="nav-aside">
				<div style={{'width': '100%'}}>
				<animated.div 
				 className="profile-picture" 
				 onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
     			 onMouseLeave={() => set({ xys: [0, 0, 1] })}
     			 style={{ transform: propsGeo.xys.interpolate(trans) }}
     			 />
     			 <h4>Henri-Pierre RIGOULET</h4>
     			 	<p><span style={{'color': "#23aebd"}}>Développeur / Intégrateur Web front-end</span> à Paris</p>
					<span id="tel-contact">07.83.06.72.40</span>
     			 </div>
     			 <div style={{'width': '100%'}}>
     			
     				<NavItems handlePages={handlePages} />

     			</div>
     			<div id="social-media">
          <ul>
					 <li><a href="https://www.facebook.com/henripierre.rigoulet"><span className="icon icon-facebook"></span></a></li>
					 <li><a href="https://twitter.com/Oyo1505"><span className="icon icon-twitter"></span></a></li>
					 <li><a href="https://www.linkedin.com/in/henri-pierre-rigoulet-6501aaba/"><span className="icon icon-linkedin"></span></a></li>
					 <li><a href="https://www.twitch.tv/oyo1505"><span className="icon icon-twitch"></span></a></li>
					 <li><a href="https://www.instagram.com/oyo1505/"><span className="icon icon-instagram"></span></a></li>
					 <li><a href="https://www.github.com/oyo1505/"><span className="icon icon-github"></span></a></li>
          </ul>
				</div>
				<Button><a href={Cv} id="download">Mon CV</a></Button>
			</aside>
		);
	
}

export default NavAside