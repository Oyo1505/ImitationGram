import React from 'react';
import PropTypes from "prop-types";
import EditUser from "../User/edit-user/"
import Header from '../Header/';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from "../../../actions/";

export class Dashboard extends React.Component {



    render() {
      
      
        console.log(this.props.user, this.props.auth)

        return (

        <div>
        <Header  /> 
        <div className="row">
          <div className="col s12 center-align">
            <h4> {this.props.auth.user.name} </h4>
                <b>Hey there,</b> 
               <p className="flow-text grey-text text-darken-1">
                You are logged into a full-stack{" "} 
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
           
            <section>
            <Link to={`/dashboard/edit/${this.props.auth.user.id}`}>Edit Your Profil</Link>
            </section>
          </div>
        </div>
      </div>
        );
    }
}

const getUserById = (userId, users) => {
    const user = Object.assign({}, users.find( user =>  user._id === userId))
    return user
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth : PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    
    let user = {    "_id": "",
                    "name": "",
                    "email": "",
                    "images_id": [],
                };
    
    const userId = state.auth.user.id
    const users = state.users;
    console.log(userId)
    if(userId && state.users.length > 0){
        user = getUserById(userId, users)
    }

    return { 
      auth: state.auth,   
      user:  user
    }
};

export default connect(
    mapStateToProps, { logoutUser }
)(Dashboard);