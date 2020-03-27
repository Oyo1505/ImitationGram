import React, { Component, Fragment } from 'react';
import SoundCard from './SoundCard';
import {Col}from 'react-bootstrap';

class SoundCards extends Component{

	render(){	
	
		
		let cardsKaamelott;

		 if(this.props.kaamelott){

		 	cardsKaamelott = this.props.kaamelott.map(function(card){
		
		 		return (<Col sm={2} >  <SoundCard  kaamelott={card} key={`${card.id}-2`} /></Col>);
		 		
		 	})
		 }

		return(
			<Fragment>
				{cardsKaamelott}
					<div className="clear"></div>
			</Fragment>
			);
	}
}

export default SoundCards;