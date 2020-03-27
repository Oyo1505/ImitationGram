import React from 'react';
import PropTypes from 'prop-types';
const RangeInput  = ({name, onChange, value, label, min, max}) => {
	return (
			<div className="form-group">
				<label htmlFor={label}>{label}</label>
				<div className="field">
					<input 
						style={{ width: '25%'}}
                        type="range"
                        min={min}
                        max={max}
						name={name}
						className="form-control"
						value={value}
						onChange={onChange}
					/>
				</div>
			</div>
		);
	
}

RangeInput.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
    value: PropTypes.number,
}
export default  RangeInput;