import React, {useState} from 'react';
import { connect } from 'react-redux';
import AddImage from '../../Image/add-image';
import {getUserById} from '../../../../Utilities';
import FollowButton from '../follow-button';
import ListImages from '../../Image/list-images';
import { Link } from 'react-router-dom';
import Header from '../../Header/';

 const UserPage = (props) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	function checkUserbyIdOnUserPage (authId, userId) {
				if(authId === userId){
					return true;
				}
	}
		const { user, auth, userIdPage} = props;
		return (
			<div style={{ height: "5vh" }} className="container-imitation valign-wrapper">
			<Header  /> 
			<div className="row">
			  <div className="col s12 center-align">  
			  <header className="header-profile-imitation">
				<h1>{user.name}</h1>
				<div className="profile-options">
					<div style={{ margin : '1em', fontWeight : 'bold' }}>
					{checkUserbyIdOnUserPage(auth.user._id, userIdPage)  &&
						<>
							<button className="btn-imt btn-edit-profil"><Link to={`/edit/${props.auth.user._id}`}>Edit Your Profil</Link></button>
							<button onClick={event => setShow(true) } className="btn-imt btn-edit-profil"> Upload an image</button>
							{ show &&
								<AddImage show={show} close={handleClose} />
							}	
						</>
						}{!checkUserbyIdOnUserPage(auth.user._id, userIdPage)  &&
							<FollowButton userId={user._id}  />
						}
					</div>
					<div style={{ margin : '1em', fontWeight : 'bold' }}>
						<p  style={{ marginTop : 0, marginBottom : 0,fontWeight : 'bold' }}>Followers</p>
						<p  style={{ marginTop : 0, marginBottom : 0,fontWeight : 'bold' }}>{user.followers_id.length}</p>
					</div>
					<div style={{ margin : '1em', fontWeight : 'bold' }}>
						<p style={{ marginTop : 0, marginBottom : 0,fontWeight : 'bold' }} >Suscribed</p>
						<p style={{ marginTop : 0, marginBottom : 0,fontWeight : 'bold' }}>{user.suscribed_id.length}</p>
					</div>	
				</div>
			  </header>
	            	<ListImages userId={userIdPage}/>
				</div>
			</div>
		</div>
		);
}


const  mapStateToProps = (state, ownProps ) =>  {
	let user = {   "_id": "",
                    "name": "",
                    "email": "",
                    "profilPicture":"",
                    "followers_id":[],
                    "suscribed_id":[],
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
export default connect(mapStateToProps,null)(UserPage);