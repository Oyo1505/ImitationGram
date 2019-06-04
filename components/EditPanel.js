import React from 'react';
import ItemsSliders from './ItemsSliders'
import CssCode from './CssCode';
 class EditPanel extends React.Component {
	

	constructor(props) {
		super(props);

		this.handler = this.handler.bind(this);
		this.state = {styles : []}
	}

	handler(val, id){
		this.props.onUpdate(val, id);
	}
	
	render() {
		var {styleFilters, styles} = this.props;
		
		return (
			<div>
				<h5>Filters Control</h5>
					<ItemsSliders handler={this.handler} styleFilters={styleFilters}  />
				<h5>Css</h5>
				 	<CssCode  styleFilters={styleFilters} styles={styles}/>
			</div>
		);
	}
}
export default EditPanel;