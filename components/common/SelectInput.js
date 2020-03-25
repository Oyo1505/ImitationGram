import React from 'react';
import PropTypes from 'prop-types';
const SelectInput  = ({name, onChange, values, label}) => {
    
	return (
			<div className="form-group">
				<label htmlFor={name}>{name}</label>
				<div className="field">
					<select 
						style={{ width: '25%'}}
						name={name}
						className="form-control"
						onChange={onChange}
					>
                    {values.map(value => {
                        return <option value={value.filter}> {value.filter} </option>
                    })}
                    </select>
				</div>
			</div>
		);
	
}

/*SelectInput.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
}*/
export default  SelectInput;