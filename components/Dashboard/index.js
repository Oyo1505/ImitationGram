import React from 'react';
import PropTypes from "prop-types";
import EditUser from "../User/edit-user/"
import Header from '../Header/';
import AddImage from '../EditImage/add-image'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


 class Dashboard extends React.Component {
   
    render() {

        return (

        <div style={{ height: "5vh" }} className="container valign-wrapper">
        <Header  /> 
        <div className="row">
          <div className="col s12 center-align">
                <b>Hey there {this.props.user.name},</b> 
                <p><Link to={`/dashboard/edit/${this.props.auth.user._id}`}>Edit Your Profil</Link></p>
                <AddImage />
            <section>
             <h3> Pictures </h3>
            </section>
          </div>
        </div>
      </div>
        );
    }
}

const getUserById = (users, userId) => {
    const user = Object.assign({}, users.find( user =>user._id === userId));
    return user;
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
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

