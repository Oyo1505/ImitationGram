import React, { Fragment} from 'react';
import FilterItem from './FilterItem';
 class FilterItems extends React.Component {


	constructor(props) {
		super(props);

		 this.state = { 
		 		filters : ['books', 'movies', 'music']		
		 }

	}
	handleFilter = (filter) => {
		this.props.select(filter)
	}
	render() {
		const { filters } = this.state;

		return (
			<Fragment>
				<ul>
				{filters.map(filter => {

					return <FilterItem key={filter} filter={filter} handle={this.handleFilter} />
				} )}	
				</ul>
			</Fragment>
		);
	}
}
export default FilterItems;