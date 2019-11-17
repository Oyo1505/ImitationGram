import React from 'react';
import PropTypes from "prop-types";
import EditUser from "../User/edit-user/"
import Header from '../Header/';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from "../../../actions/";

export class Dashboard extends React.Component {



    render() {
        const { user } = this.props.auth;

        return (

        <div style={{ height: "5vh" }} className="container valign-wrapper">
        <Header  /> 
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into a full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
            </h4>
            <section>
            <Link to={`/dashboard/edit/${user.id}`}>Edit Your Profil</Link>
            </section>
          </div>
        </div>
      </div>
        );
    }
}



Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired
};

const mapStateToProps = state=> {
  

    return {
        users: state.users,
        auth: state.auth
    }
};

export default connect(
    mapStateToProps, { logoutUser }
)(Dashboard);