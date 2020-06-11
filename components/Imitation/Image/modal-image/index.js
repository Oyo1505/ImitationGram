import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserById } from '../../../../Utilities';
import  default_user from '../../../../images/default_user.png';
import { Modal } from 'react-bootstrap';
import PropTypes from "prop-types";


const ModalImage = (props) => {
    const [show , setShow] = useState(false);
    const handleClose = () => {
      props.close(false);
    };
    const user = props.user;
    return (
        <>
        
          <Modal 
          animation={false}
           size="xl"
          show={props.show} 
          onHide={handleClose}
          dialogClassName="modal-90w"
          centered
          >
            <Modal.Header closeButton >
              <Modal.Title> 
              <header style={{width:"100%", display:"flex", flexDirection :"row", justifyContent :"left", alignItems: "center" }}>
              <div className="picture-profile-thumb" style={{marginRight : "1em"}}>
                <img src={default_user} style={{height: "40px"}} alt="image-default-user" />
              </div>
              <div className="username-thumb-image-timeline">
                <Link to={`/user/${user._id}`}>{user.name}</Link>
              </div>
              </header>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img style={{width : "100%", maxHeight: '500px'}}  src={props.image.url} />
            </Modal.Body>
            <Modal.Footer>
              <p>{props.image.likes}</p>
              <p>comments</p>
            </Modal.Footer>
          </Modal>
        </>
      );

}
 
ModalImage.propTypes = {
    image : PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  let user = {   
      "_id": "",
      "name": "",
      "email": "",
      "followers_id":[],
      "suscribed_id":[],
      "images_id": [],
    };      

  let users = state.users;
	let userId = ownProps.image.user_id;

	if(userId && users.length > 0){

		user = getUserById(users, userId)
	}
  return {
     user
  }
}


export default connect(mapStateToProps, null)(ModalImage);
