import React from 'react';
import PropTypes from 'prop-types'
import TextInput from '../common/TextInput';
import CheckBox from '../common/CheckBox';

class UserForm extends React.Component {

	constructor(props){
		super(props)
	}
	/*makeCheckBoxes = () => {
		return this.props.hobbies.map(hobby =>{
			
			<CheckBox 	></CheckBox>

		} )
	}*/
    render() {
       // const boxes = this.makeCheckBoxes
        return (
            <div>
				<form>
					<TextInput 
						name="username"
						label="label"
						value={this.props.user.username}
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
