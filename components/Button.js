import React from 'react';
import styled from 'styled-components';

 const ButtonModel = styled.button`
 
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

 class Button extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ButtonModel></ButtonModel>
		);
	}
}
export default Button;