import React from 'react';
import ItemsSliders from './ItemsSliders'
 class EditPanel extends React.Component {
	

	constructor(props) {
		super(props);

		this.handler = this.handler.bind(this);
	}

	handler(val, id){
		this.props.onUpdate(val, id);
	}

	render() {
		var styleFilters = this.props.styleFilters;
		
		return (
			<div>
				<h5>Fitlers Control</h5>
					<ItemsSliders handler={this.handler} styleFilters={styleFilters}  />
			</div>
		);
	}
}
export default EditPanel;