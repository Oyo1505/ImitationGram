import React from 'react';
import PropTypes from 'prop-types';
import imageGram from '../../../../images/imageGram.jpg'


 class FilterItem extends React.Component {

 	  constructor(props) {
   		 super(props);
	    this.handleFilter = this.handleFilter.bind(this);
	    	this.state = {inputField: ''}
  		}


	handleFilter(e)  {
		e.preventDefault();
		this.props.action(e.target.dataset.name, this.props.styles)
		this.setState({inputField: e.target.dataset.name});

		}

	render() {
		
		return (
			<li className="thumb-filter" onClick={this.handleFilter}>
				<div>
				<img id={this.props.filter}  data-name={this.props.filter} src={imageGram} alt="thumb forest" />
				<p className="title-filter-p" data-name={this.props.filter}>{this.props.filter}</p>
				</div>
			</li>
		);
	}
}
export default FilterItem;

FilterItem.propTypes = {
	inputField: PropTypes.string,
}