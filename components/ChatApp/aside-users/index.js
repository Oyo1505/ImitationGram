import React from 'react';
import {Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const UserList = ({users}) =>  {
		
		return (
			<aside className="aside-users" data-test="AsideUsersComponent">
				<ul>
				{users.map(user => 

					<li className="list-user-group-item" key={user._id}>
					<Link to={`/chat-app/user/${user._id}`}>
						{user.username}
					</Link>
					</li>


				)}
				</ul>
			</aside>
		);
	
}

UserList.propTypes = {

	users : PropTypes.array.isRequired
}
	
export default UserList;