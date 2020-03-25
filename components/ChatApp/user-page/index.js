import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserForm from '../user-form/';
import * as userActions from '../../../actions';
import PropTypes from 'prop-types';
import Hobbylist from '../hobby-list/';

class UserPage extends React.Component {
	 constructor(props, context) {
	 	super(props, context)
	 	this.state = { 
	 		isEditing : false,
	 		user: this.props.user,
	 		/*userHobbies: this.props.userHobbies,
	 		checkBoxHobbies: this.props.checkBoxHobbies,*/
	 	}
	 }

	 shouldComponentUpdate = (nextProps) => {
	 	if(this.props.user._id !== nextProps.user._id){
	 		this.setState({user: nextProps.user});
	 		return true;
	 	}
	 	/*if(this.props.checkBoxHobbies.length < nextProps.checkBoxHobbies.length){
	 		this.setState({userHobbies: nextProps.userHobbies, checkBoxHobbies: nextProps.checkBoxHobbies})
	 	}*/
	 	return false;
	 }

	 toggleEdit =()=> {
	 	this.setState({isEditing: !this.state.isEditing})
	 }
	 /*UPDATE STATE IN COMPONENT USER PAGE*/
	 updateUserState = (event) => {
	 	const fieldName = event.target.name;
	 	const user = this.state.user;
	 	user[fieldName] = event.target.value;
	 	return this.setState({ user: user})
	 }

	 /*updateUserHobbies = (event) => {
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
	  	this.props.actions.updateUser(this.state.user);
	  }

	  deleteUser = (event) => {
	  	this.props.actions.deleteUser(this.state.user)
	  } 

	render() {
		if(this.state.isEditing){
			return (
					<div>
						<h2>Edit User</h2>
						<UserForm 
							user={this.state.user}
							onSave={this.saveUser}
							onChange={this.updateUserState}
						/>
						<button onClick={this.deleteUser}>Delete</button> 
					</div>
				)
		}
		return (
			<div>
				name :{this.props.user.username} <br/>
				<button onClick={this.toggleEdit}>Edit</button>
			</div>
		);
	}
}

UserPage.propTypes = {
	user: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
}

/*function collectUserHobbies (hobbies, user) {
		let selected = hobbies.map(hobby => {
			if(user.hobbies.filter(hobbyId => hobbyId == hobby.index).length > 0){
				return hobby
			}
		})
	return selected.filter(el => el != undefined);
}*/

function getUserById (users, userId) {

	let  user = Object.assign({}, users.find( user => user._id == userId))
	return user;
}

/*function hobbiesForCheckBoxes(hobbies, user=null) {
	return hobbies.map(hobby => {
		if(user && user.hobbies.filter(hobbyId => hobbyId == hobby.index).length > 0){
			hobby['checked'] = true;
		}else {
			hobby['checked'] = false;
		}
		return hobby;
	})
}*/


function mapDispatchToProps(dispatch){
	
	return {
		actions : bindActionCreators(userActions, dispatch)
	}
}

function  mapStateToProps (state, ownProps)   {
	let user = {  	"_id": "",
				    "username": "fff"
				};
	
	const userId = ownProps.match.params.id;

	if(userId && state.users.length > 0 ){
		user = getUserById(state.users, userId);
	}

	return{ user: user}
} 
export default connect(mapStateToProps, mapDispatchToProps)(UserPage)