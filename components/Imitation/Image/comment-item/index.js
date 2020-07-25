import React from 'react';
import { connect } from 'react-redux';
import {getUserById} from '../../../../Utilities';

const CommentItem = (props) => {
    const user= props.user;

    function deleteComment(event){
        //TODO delete comment
    
    }
    return (
        <div>
            <span><b>{user.name}</b></span> <span>{props.comment[1]}</span><span onClick={deleteComment}>x</span>
        </div>
    );

}
const mapStateToProps = (state, ownProps) => {
    let user = {    "_id": "",
                    "name": "",
                    "email": "",
                    "profilPicture":"",
                    "followers_id":[],
                    "suscribed_id":[],
                    "images_id": [],
                };
         
    const userId = ownProps.comment[0];
    const users = state.users;
    if(userId && state.users.length > 0){
        user = getUserById(users, userId);
   }     
    return  {
        user
    }
}
export default connect(mapStateToProps, null)(CommentItem);