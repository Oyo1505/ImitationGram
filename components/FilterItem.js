import React from 'react';
import imageGram from '../images/imageGram.jpg'


 class FilterItem extends React.Component {

 	  constructor(props) {
   		 super(props);
	    this.handleFilter = this.handleFilter.bind(this);
	    	this.state = {inputField: ''}
  		}


	handleFilter(e)  {
		e.preventDefault();
		this.props.action(e.target.dataset.name)
		this.setState({inputField: e.target.dataset.name});

		}

	render() {
	
		return (
			<li className="thumb-filter" onClick={this.handleFilter}>
				<img className={this.props.filter}  data-name={this.props.filter} src={imageGram} alt="thumb forest" />
				<p>{this.props.filter}</p>
			</li>
		);
	}
}
export default FilterItem;