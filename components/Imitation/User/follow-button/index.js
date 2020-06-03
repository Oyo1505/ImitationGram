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

    function actionOnSuscribedArray (id){
        let userCopy = copyTheCurrentObject(user);
        if(!userCopy.suscribed_id.includes(id)){
            userCopy.suscribed_id.push(id)
            return userCopy;
        }else if(userCopy.suscribed_id.includes(id)){
            let indexSuscribed = userCopy.suscribed_id.findIndex(index => index === id);
            userCopy.suscribed_id.splice(indexSuscribed, 1 );
            return userCopy; 
        }
    }
    function submitToAddFollower(event){
        event.preventDefault();
        let userCopy = actionOnSuscribedArray(props.userIdFromUserPage);
        setUser(userCopy);
        props.actions.editUser(user);
    }
    return(
        <>
        {user.suscribed_id.includes(props.userIdFromUserPage) &&
            <button className="btn-followed" style={{width: '100px'}} onClick={submitToAddFollower}>Followed</button>
        }
        {!user.suscribed_id.includes(props.userIdFromUserPage) &&
            <button className="btn-follow" style={{width: '100px'}} onClick={submitToAddFollower}>Follow</button>
        }
        </>
    )
}

FollowButton.propTypes = {
    user: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
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
                    "suscribed_id":[],
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