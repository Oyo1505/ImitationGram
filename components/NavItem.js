import React, { Component } from 'react';

class NavItem extends Component {

	onClickItem = (event) => {
		
		this.props.handlePage(this.props.item.index)
	}	
  render(){
  	 return (
	    <li onClick={this.onClickItem} className="item-menu">{this.props.item.name}</li>
	  );
  }	
 
}

export default NavItem;