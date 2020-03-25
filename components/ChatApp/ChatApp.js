import React from 'react';
import {connect} from 'react-redux';
import UserList from './aside-users';
import {Link } from 'react-router-dom'
//import AddUser from './add-users';
import PropTypes from 'prop-types';
import * as actions from '../../actions'

 class ChatApp extends React.Component {

	render() {
		const users = this.props.users
		return (
			<div id="chat-app" data-test='ChatAppComponent'>
				<Link to='chat-app/user/new' className="btn btn-primary" >
					Add a user
				</Link>
					<UserList users={users} />
					<div>
						{this.props.children}

					</div>
			</div>
		);
	}
}

ChatApp.propTypes = {
	users: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
	// state = {users: [{id:1, name: "Maru"}, etc.]}
	return {
		users : state.users
	}
} 
export default connect(mapStateToProps)(ChatApp);