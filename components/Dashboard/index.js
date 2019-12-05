import React from 'react';
import PropTypes from "prop-types";
import Header from '../Header/';
import UserPage from "../User/user-page/";
import { getUserById } from '../../../Utilities/'
import { connect } from 'react-redux';


 class Dashboard extends React.Component {
   
    render() {

        return (

        <div style={{ height: "5vh" }} className="container valign-wrapper">
        <Header  /> 
        <div className="row">
          <div className="col s12 center-align">
                <b>Hey there {this.props.user.name},</b> 
                <UserPage user={this.props.user} />
          </div>
        </div>
      </div>
        );
    }
}


Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    let user = {    "_id": "",
                    "name": "",
                    "email": "",
                    "images_id": [],
                };      
    const userId = state.auth.user._id;
    const users = state.users;
    if(userId && state.users.length > 0){
         user = getUserById(users, userId);
    }
    return {
        auth: state.auth,
        user: user,
        users: state.users
    };
}

export default connect(mapStateToProps, null)(Dashboard);

