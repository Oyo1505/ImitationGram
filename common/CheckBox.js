import React from 'react';
import ProtTypes from 'prop-types';

 class CheckBox extends React.Component {

	render() {
		return (
			<div className='field'>
				<input 
					type="checkBox"
					name={this.props.item.name}
					value={this.props.item.checked}
					onChange={this.props.handleChange}
				/>
			</div>
		);
	}
}

CheckBox.propTypes = {
	item : ProtTypes.object.isRequired
}
export default CheckBox;