import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as userActions from "../../../../actions/";
import { verifyFile, checkExtensionFile, getUserById, copyTheCurrentObject } from '../../../../Utilities';
import { propTypes } from 'react-scroll-horizontal';

const UploadProfilePicture =(props)=> {
	const [user, setUser] = useState(props.user)
	const [isLoading, setLoadin] = useState(false);
	const fileInput = useRef(null);
	
	
   function handleOnDrop (rejectedFiles ){	
	
		if( rejectedFiles && rejectedFiles.length > 0){
			verifyFile(rejectedFiles);
        }
		if(fileInput.current.files[0], fileInput.current.files.length > 0){
			const isVerified = verifyFile(fileInput.current.files);
			if(isVerified){	
				onUpdate(fileInput.current.files[0])
			}
		}	
	}	
	async function onUpdate () {
		if(checkExtensionFile(fileInput.current.files[0].name)){
			const data = new FormData();
			data.append('file', fileInput.current.files[0]);
            data.append('upload_preset', 'profilePicture');
			const res = await fetch('https://api.cloudinary.com/v1_1/dtjpoyvv5/image/upload', {
				method: 'POST',
				body:data,
			});	
			const file = await res.json();
			const copyUser = copyTheCurrentObject(user)
			copyUser.profilPicture = file.secure_url;
			props.actions.editUser(copyUser);
			//won't set user correctly in setUser
			setUser(copyUser);
        }
	}
        return (
            <div>
                <input type="file" ref={fileInput} name="avatar"  style={{marginBottom : "25px"}}/>
                <input type="button" onClick={handleOnDrop} value="Upload"/> 
            </div>
        ) 
}

UploadProfilePicture.propTypes = {
	user : PropTypes.object.isRequired,
	isLoading : PropTypes.bool

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    }
}
const mapStateToProps =(state) =>{
	let user = {
		"_id": "",
		"name": "",
		"email": "",
		"profilPicture": "",
		"followers_id":[],
		"suscribed_id":[],
		"images_id": [],
	}

	let users = state.users;
	let userId = state.auth.user._id;
	if(userId && users.length > 0){

		user = getUserById(users, userId)
	}
	return {
		user
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(UploadProfilePicture);