import React, { Component } from 'react';
import styled from 'styled-components';
import NavItems from './NavItems';
import Cv from '../CV/CV_RIGOULET.pdf';

const Button = styled.button `
width: 250px;
height: 54px;
transition: 0.25s;
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
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
 `;
class Nav extends Component {


    render() {

        return (

            <div id='menu-header' className="l-container">
							<Button><a href={Cv} id="download">Télécharger le CV </a></Button>
						<NavItems />
					</div>
          
        );
    }
}

export default Nav