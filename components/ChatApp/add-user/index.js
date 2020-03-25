import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../../actions/';
import UserForm from '../user-form';

class AddUser extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			user: {
				username:'',
			},
			saving: false
		}
	}

	updateUserState = (event) => {
		
	 	const fieldName = event.target.name;
	 	const user = this.state.user;
	 	user[fieldName] = event.target.value;
	 	return this.setState({ user: user})
	 }

	/* updateUserHobbies = (event) => {
	  	const user = this.state.user;
	  	const hobbyId = event.target.value;
	  	const hobby = this.state.hobbiesForCheckBoxes.filter(hobby=> hobby.index == hobbyId)[0];
	  	const checked = !hobby.checked;
	  	hobby[checked] = !hobby.checked;

	  	if(!checked){
	  		user.hobbies.push(hobby.index);
	  	}else  {
	  		user.hobbies.splice(user.hobbies.indexOf(hobby.index))
	  	}

	  	this.setState({user: user})
	  }*/

	  saveUser=(event)=>{
	  	event.preventDefault();
	  	this.props.actions.createUser(this.state.user);
	  }

	render() {
		return (
			<div>
					<UserForm 
						user={this.state.user}
						onSave={this.saveUser}
						onChange={this.updateUserState}
					/>
			</div>
		);
	}
}

function hobbiesForCheckBoxes(hobbies) {
  return hobbies.map(hobby => {
    hobby['checked'] = false;
    return hobby;
  });
}


AddUser.propTypes = {
	actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps){
	let checkBoxHobbies = [];

	if(state.hobbies.length > 0){
		checkBoxHobbies = hobbiesForCheckBoxes(Object.assign([], state.hobbies))
	}

	return{
		checkBoxHobbies: checkBoxHobbies
	};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(AddUser)