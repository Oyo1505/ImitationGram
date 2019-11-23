import React from 'react';
import PropTypes from 'prop-types'
import TextInput from '../../../common/TextInput';

class UserForm extends React.Component {

    render() {
        return (
            <div>
				<form>
					<TextInput 
						name="name"
						label="label"
						value={this.props.user.name}
						onChange={this.props.onChange}
					/>
					<input 
						type="submit"
						disabled={this.props.saving}
						className="btn btn-primary"
						onClick={this.props.onSave}
					/>
	
				</form>
			</div>
        );
    }
}

UserForm.propTypes = {
	user: PropTypes.object.isRequired,
	onSave: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired
}


export default UserForm;