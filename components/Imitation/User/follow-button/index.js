import React, {useState} from "react";
import PropTypes from 'prop-types';
import {getUserById} from '../../../../Utilities';
import * as userActions from "../../../../actions/";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const FollowButton = (props) => {
   const [user, setUser] = useState(props.user);
 
   function copyTheCurrentObject (object) {
        let cloneImage = Object.assign({},object);
        return cloneImage;
    }
    function addIdFollower (id){
       let userCopy = copyTheCurrentObject(user);
       userCopy.followers_id.push(id);
       return userCopy
    }
    function submitToAddFollower(event){
        event.preventDefault();
        let userCopy = addIdFollower(props.userIdFromUserPage);
        setUser(userCopy);
        props.actions.editUser(user);
    }
    return(
        <button className="btn-imt btn-follow" onClick={submitToAddFollower}>Follow</button>
    )
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    }
}

const mapStateToProps = (state, ownProps) => {
    let user = {    "_id": "",
                    "name": "",
                    "email": "",
                    "followers_id":[],
                    "images_id": [],
                };
    
    const userIdFromUserPage = ownProps.userId;
    const userId = state.auth.user._id;
    const users = state.users;
    if(userId && state.users.length > 0){
         user = getUserById(users, userId);
    }            
   
    return {
        userIdFromUserPage,
        user
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(FollowButton)