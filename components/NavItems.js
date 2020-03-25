import React, { Component } from 'react';
import NavItem from './NavItem';
import {  Link } from "react-router-dom";

class NavItems extends Component {
	constructor(props){
		super(props);
		this.state = {
			navItems: [
			{
				index:0,
				name:'About'
			},
			{
				index:1,
				name:'Formation',
			},
			{
				index:2,
				name:'Skills',
			},
			{
				index:3,
				name:'Experiences',
			},
			{
				index:4,
				name:'Portfolio',
			},
			{
				index:5,
				name: 'Contact',
			}
			]
		}
	}
	handlePage = (index) => {
		
	 this.props.handlePages(index);
	}
	render(){

		let navItems;
		if(this.state.navItems){
			navItems = this.state.navItems.map(item => {
				return <NavItem key={`item-menu--aside${item.index}`} item={item} handlePage={this.handlePage} /> 
			})
		}
		return(
				<nav>
					<ul>	
						{navItems}
					</ul>
				</nav>
			);
	}
}

export default NavItems