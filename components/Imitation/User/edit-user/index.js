import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import Header from '../../Header';
import UserForm from '../UserForm/';
import  default_user from '../../../../images/default_user.png';
import UploadProfilePicture from '../upload-profile-picture';
import { bindActionCreators } from 'redux';
import * as userActions from "../../../../actions/";
import { connect } from 'react-redux';
import { copyTheCurrentObject } from '../../../../Utilities';

class EditUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
        }
    }
  deleteAllimagesUser  =  async (id) =>{
        let images = this.props.images;
        await Promise.all(images.map(image => {  
            if(image.user_id === id){
             this.props.actions.deleteImage(image);
            };
        }));
    }
    onChangeValue = (event) => {
        event.preventDefault();
        const stateName = event.target.name;
        const user = this.state.user;
        user[stateName] = event.target.value;
        this.setState({ user: user });
    }
    deleteUser = (event) => {
        event.preventDefault();
        this.props.actions.deleteUser(this.state.user);
        this.deleteAllimagesUser(this.state.user._id);
        this.props.actions.logoutUser();
        this.props.history.push("/imitationgram");
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.actions.editUser(this.state.user);
        
    }
    render() {
        return (
            <div id="imitation-app">
            <div style={{ height: "5vh" }} className="container-imitation valign-wrapper" data-test="editUserComponent">
				<Header />
                <div className="edit-user-page" >
                <div className="picture-profile-thumb">
                <h3>Profil Picture</h3>
                {!this.state.user.profilPicture &&
                    <img src={default_user} style={{height: "15vh"}} alt="image-default-user" />
                }
                {this.state.user.profilPicture &&
                    <img src={this.state.user.profilPicture} style={{height: "15vh"}} alt="default-image" />
                }
                    <UploadProfilePicture />
                </div>
                <div style={{border : "2px solid black", padding:"20px", fontWeight: "bold", margin: "0 auto", width:"50%" }} >
                    <Link to={`/reset-password`}>Change password</Link>
                </div>
                 
                <br/>
                <UserForm 
                       style={{marginTop: "50vh" }}
                        user={this.state.user}
                        onChange={this.onChangeValue}
                        onSave={this.onSubmit}
                />
               <button onClick={this.deleteUser}>Delete your account ?</button>
			</div>
            </div>
            </div>
        );
    }
}

EditUser.propTypes = {
    user: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}

const getUserById = (users, userId) => {
    const user = Object.assign({}, users.find(user => user._id === userId));
    return user;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    }
}
const mapStateToProps = (state, ownProps) => {
    let user = {
        "_id": "",
        "name": "",
        "email": "",
        "profilPicture":"",
        "followers_id":[],
        "suscribed_id":[],
        "images_id": [],
    };
    const userId = ownProps.match.params.id;
    const users = state.users;
    if (userId && state.users.length > 0) {
        user = getUserById(users, userId);
    }
    return {
        user: user,
        users: state.users,
        images: state.images
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);