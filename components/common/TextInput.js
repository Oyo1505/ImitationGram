import React from 'react';
import PropTypes from 'prop-types';
const TextInput  = ({name, onChange, placeholder, value, label}) => {

	return (
			<div className="form-group">
				<label htmlFor={name}>{label}</label>
				<div className="field">
					<input 
						style={{ width: '25%'}}
						type="text"
						name={name}
						className="form-control"
						placeholder={placeholder}
						value={value}
						onChange={onChange}
					/>
				</div>
			</div>
		);
	
}

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string
}
export default  TextInput;