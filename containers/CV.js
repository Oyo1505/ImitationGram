import React,  { Component, Fragment} from 'react';
import { Transition, animated } from 'react-spring/renderprops'
import Header from '../containers/Header';
import About from './About';
import Formation from './Formation';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Experience from "./Experience";
import NavAside from "../components/NavAside";

class CV  extends Component { 
	state = { index: 0 }

    handlePages = (index)=> {
    	this.setState({index:index})
    }
	render(){
		const pages = [
		  style => (
		    <animated.div className="pages-animated"  style={{ ...style }}><About /></animated.div>
		  ),
		  style => (
		    <animated.div className="pages-animated"  style={{ ...style }}><Formation /></animated.div>
		  ),
		  style => (
		    <animated.div className="pages-animated"  style={{ ...style }}><Skills /></animated.div>
		  ),
		   style => (
		    <animated.div className="pages-animated"  style={{ ...style }}><Experience /></animated.div>
		  ),
		    style => (
		    <animated.div className="pages-animated"  style={{ ...style }}><Portfolio /></animated.div>
		  ),
		     style => (
		    <animated.div className="pages-animated"  style={{ ...style }}><Contact /></animated.div>
		  ),
		]


		return (

			<Fragment>
			
		        <div id="cv-section" className="l-container">
		     	<NavAside handlePages={this.handlePages} />
		        <scroll-cotnainer id="section-content-cv">
					<Transition
			          native
			          reset
			          unique
			          items={this.state.index}
			          from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
			          enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
			          leave={{ opacity: 0, transform: 'translate3d(0,0,0)' }}>
			          {index => pages[index]}
			        </Transition>
		         </scroll-cotnainer>   	
		       
		        </div> 
		    </Fragment> 
		)   
    }
};



export default CV;
