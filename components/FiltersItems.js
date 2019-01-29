import React from 'react';
import FilterItem from './FilterItem'
import filters from '../json/filters.json'


class FiltersItems extends React.Component {


		constructor() {
	    super();
	    this.handler = this.handler.bind(this);
	    this.state = {
	      classFilter: ''
	    };
	  }


	handler(filter){
		
		this.props.action(filter);
		this.setState({
			classFilter:filter
		})
	}
	
	render() {
		
		let filtersItems;
		filtersItems = filters.map(function(filter){
			return (<FilterItem key={`id-${filter.id}-${filter.filter}`} action={this.handler}  filter={filter.filter}  />);
		}, this);

		return (
			<div><ul className="gallery-thumb">{filtersItems} </ul></div>
		);
	}
}

export default FiltersItems;