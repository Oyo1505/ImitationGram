import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import {getUserById} from '../../../../Utilities';
import FollowButton from '../follow-button';
import ListImages from '../../Image/list-images';
import { Link } from 'react-router-dom';
import Header from '../../Header/';

 class UserPage extends React.Component {
	 checkUserbyIdOnUserPage = (authId, userId) => {
				if(authId === userId){
					return true;
				}
	}
	render() {
		const { user, auth, userIdPage} = this.props;
		return (
			<div style={{ height: "5vh" }} className="container valign-wrapper">
			<Header  /> 
			<div className="row">
			  <div className="col s12 center-align">  
			  <header className="header-profile-imitation">
			  <h1>{user.name}</h1>
			  {this.checkUserbyIdOnUserPage(auth.user._id, userIdPage)  &&
				<>
					<button className="btn-imt btn-edit-profil"><Link to={`/edit/${this.props.auth.user._id}`}>Edit Your Profil</Link></button>
					<button className="btn-imt btn-edit-profil"><Link to={`/add/`}> Upload an image </Link></button>
				</>
				}{!this.checkUserbyIdOnUserPage(auth.user._id, userIdPage)  &&
					<FollowButton userId={user._id}  />
				}
			  </header>
				
	            <section>
	            	<ListImages userId={userIdPage}/>
	            </section>
				</div>
			</div>
		</div>
		);
	}
}


const  mapStateToProps = (state, ownProps ) =>  {
	let user = {    "_id": "",
                    "name": "",
                    "email": "",
                    "images_id": [],
                };      
	let users = state.users;
	let userId = ownProps.match.params.id;
	if(userId && users.length > 0){

		user = getUserById(users, userId)
	}
	return {
		auth: state.auth,
		user: user,
		userIdPage : userId
	};
}
export default connect(	mapStateToProps,null)(UserPage);
