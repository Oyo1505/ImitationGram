import React from 'react';

 class ItemSlider extends React.Component {

	constructor(props) {
		super(props);

		this.state = { value : this.props.filter.value}

		this.onUpdate = this.onUpdate.bind(this);
	}

	onUpdate(e){
		this.props.action(e.target.value, e.target.dataset.id );
		this.setState({ value: e.target.value});
	}
	render() {
	
		return (
			<div className="item-slider" >
				<div>
					
					<span>{this.props.filter.name}</span>
					<span id="filter-value">{this.props.filter.value}{this.props.filter.type}</span>
				</div>
				
				<input value={this.state.value} data-id={this.props.filter.id} onChange={this.onUpdate} type="range" max={this.props.filter.max}/>
			</div>
		);
	}
}

export default ItemSlider;