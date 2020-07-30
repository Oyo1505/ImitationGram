import React, {useState} from "react";
import {getUserById, copyTheCurrentObject} from '../../../../Utilities';
import Header from '../../Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from "../../../../actions/";
import ModalMessage from '../modal-message';
import PropTypes from 'prop-types';
import { ModalBody } from "react-bootstrap";

const ResetPassword = (props) => {
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [isSubmitted, setSubmit ] = useState(false);

    function onChange(event){
        if(event.target.name === "password"){
            setPassword(event.target.value)
        }else{
            setPassword2(event.target.value)
        }
    }
   function handleClose () {setSubmit(false)};
   async function onSubmit(event){
    event.preventDefault();
    if(password.localeCompare(password2)===0){
        const copyUser= copyTheCurrentObject(props.user);
        copyUser.password = password;
        props.actions.editUser(copyUser);
        setSubmit(true);
    }
   }
    return (
    <div style={{ height: "5vh" }} className="container valign-wrapper">
       <Header />
        <form className="form-imitation" >
            <div>
                <label>Nouveau Password</label>
                <br/>
                <input type="password" min="6" required type="password" onChange={onChange} value={password} name="password"/>
            </div>
            <div>
                <label>Confirmer Password</label>
                <br/>
                <input type="password" required type="password" min="6" onChange={onChange} value={password2} name="password2" />
            </div>
            <input type="submit" onClick={onSubmit} value="Submit"/>
            <br/>
        </form>
        <ModalMessage message="Password has been modified" close={handleClose} show={isSubmitted} />
    </div>
    )    
}

ResetPassword.propTypes ={
    user: PropTypes.object.isRequired
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    }
}
const mapStatesToProps = (state)=>{
    let user = {
        "_id": "",
        "name": "",
        "email": "",
        "profilPicture":"",
        "followers_id":[],
        "suscribed_id":[],
        "images_id": [],
        "password": ""
    };
    const userId = state.auth.user._id;
    const users = state.users;
    if (userId && state.users.length > 0) {
        user = getUserById(users, userId);
    }
    return {
        user
    };
}

export default connect(mapStatesToProps, mapDispatchToProps)(ResetPassword);