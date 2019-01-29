import React from 'react';
import styled from 'styled-components';

const Figure = styled.figure`
	positition: relative;
	
`;

 const Button = styled.button`
 transition: 0.25s;
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
  &:hover,
  &:focus { 
   
    box-shadow: inset 0 0 0 2em #ffa260 ;
    color: #fff;
  }
 `;

class Photo extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {
		let filtersMap

		filtersMap = this.props.styleFilters.map(function(filt){
			return( `${filt.name}(${filt.value}${filt.type})` );
		}).join(" ");

		return (
			<div>
			<figure style={{filter: `${filtersMap}`}} 
			className='filter'><img src={this.props.photo}
			 className={this.props.filter} alt="image default" />
			</figure>
			<Button> Save </Button>
			<Button> Download </Button>
			</div>
		);
	}
}
export default Photo