import React from 'react';
import PropTypes from 'prop-types';

const HobbyList = ({hobbies}) =>  {
		return (
			<div>
				<h1>Hobbies</h1>
				<ul>
					{hobbies.map(hobby => 
						<li key={hobby.id}>{hobby.hobbies}</li>)}
				</ul>
			</div>
		);
	
}

HobbyList.propTypes = {
	hobbies: PropTypes.array.isRequired
}

export default  HobbyList;