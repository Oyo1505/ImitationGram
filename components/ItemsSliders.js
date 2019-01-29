import React from 'react';
import ItemSlider from './ItemSlider'
 class ItemsSliders extends React.Component {


	constructor(props) {
		super(props);
		this.state = { filters:this.props.styleFilters};

			this.handle = this.handle.bind(this);
	}
	

	handle(val, id){
		
		this.props.handler(val, id);

	}
	render() {
		
		let itemSlider;
		
		 itemSlider = this.state.filters.map(function(filter){

		 	return ( <ItemSlider filter={filter} action={this.handle} key={`filter-panel-${filter.id}`} />)
		 },this);

		return (
			<div>{itemSlider} </div>
		);
	}
}
export default ItemsSliders;