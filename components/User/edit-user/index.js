import React from 'react';
import PropTypes from "prop-types";
import Header from '../../Header';
import { editUser } from "../../../../actions/";
import { connect } from 'react-redux';


export class UserPage extends React.Component {

	constructor(props, context) {

		super(props, context);

		this.state = {
			user: this.props.user
		}
	}

	onChangeValue = (event) => {
		event.preventDefault();
		const stateName = event.target.name;
		const user = this.state.user;
		user[stateName] = event.target.value;
		this.setState({ user });
	}

	onSubmit = (event) => {
		event.preventDefault();
		this.props.editUser(this.state.user);

	}
	render() {
		return (
			<div>
				<form>
					<label>
						<input name="username" onChange={this.onChangeValue} value={this.state.user.username} /> 
					</label>
					<label>
						<input name="email" onChange={this.onChangeValue} value={this.state.user.email} /> 
					</label>
					<button onClick={this.onSubmit}> Update info</button>
				</form>
			</div>
		);
	}
}
 
const getUserById = (users, userId) => {
	const user = Object.assign({}, users.find( user => user._id === userId ));
	return user;
}
const mapStateToProps = (state, ownProps) => {
	let user = {  	"_id": "",
				    "username": "",
				    "email": "",
					"images_id": [],
				};
	const userId = ownProps.match.params.id;
	const users = state.users;
	if(userId && state.users.length > 0){
		 user = getUserById(users, userId);
	
	}
	return {
		user: user
	};
}

export default connect(mapStateToProps, {editUser})(UserPage);
