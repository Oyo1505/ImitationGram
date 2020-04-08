import React, { Fragment, useState, set } from 'react';
import { Link } from 'react-router-dom';
import  default_user from '../../../../images/default_user.png'
import  {connect } from 'react-redux';

class ImageHeaderTimeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
        }
    }

    render() {
        return (
        <header className="header-image-timeline">
            <div className="picture-profile-thumb">
                <img src={default_user} alt="image-default-user" />
            </div>
            <div className="username-thumb-image-timeline">
                <Link to={`/user/${this.state.user._id}`}>{this.state.user.name}</Link>
              
            </div>
            <div></div>
        </header>
     );  
    }
};

const getUserbyId = (users, userId) => {
    const user = Object.assign({}, users.find(user => user._id === userId));
    return user;
}

const mapStateToProps = (state, ownProps) => {
    let user = {
        "_id": "",
        "name": "",
        "email": "",
        "images_id": [],
    };
   
    const userId = ownProps.userId;
    const users = state.users 

    if(userId && users.length > 0){
        user = getUserbyId(users, userId);
    }
	return {
		user : user
	}
}
export default connect(mapStateToProps, null)(ImageHeaderTimeline);