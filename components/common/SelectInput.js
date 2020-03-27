import React from 'react';
import PropTypes from 'prop-types';
const SelectInput  = ({name, onChange, values,title, label}) => {
	return (
			<div className="form-group">
				<label htmlFor={label}>{label}</label>
				<div className="field">
					<select 
						style={{ width: '25%'}}
						name={name}
						className="form-control"
						onChange={onChange}
					>
                    {values.map(value => {
                        return <option key={value[title]} value={value[title]}> {value[title]} </option>
                    })}
                    </select>
				</div>
			</div>
		);
	
}

SelectInput.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	values: PropTypes.array.isRequired,
}
export default  SelectInput;