import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LikeButton from '../like-button-image';
import AddComment from '../add-comment';
import { getUserById } from '../../../../Utilities';
import CommentsImage from '../comments-image/';
import { Modal } from 'react-bootstrap';
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom"
import { deleteImage } from "../../../../actions/";
import  default_user from '../../../../images/default_user.png';

const ModalImage = (props) => {
    const  [toggle, setToggle] = useState(false);
    const handleClose = () => {
      props.close(false);
    };
  function checkCurrentUserbyId(authId, userId) {
      if(authId === userId){
        return true;
      }else{
        return false;
      }
    }
    function toggleMenu(){

      setToggle(!toggle);
    }
  async function onClickDeleteImage(imageId){
   await props.deleteImage(imageId);
  }
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
                <img src={default_user} style={{height: "30px"}} alt="image-default-user" />
              </div>
              <div className="username-thumb-image-timeline">
                <Link to={`/user/${user._id}`}>{user.name}</Link>
              </div>
            <div className="auth-menu" >
            <button onClick={toggleMenu} type="button"><i  className="icon icon-menu-dots btn-menu-modal"></i></button>
					
              <ul style={{display : toggle ? "block" : "none"}}>
              {checkCurrentUserbyId(props.match.params.id, props.auth.user._id) &&
						<>
                <li><Link to={`/edit-image/${props.image.name}`}> Edit </Link></li>
						  	<li onClick={() => onClickDeleteImage(props.image._id)}> Delete </li>
                </>
						}
            <li> Share </li>
            <li> Unfollow </li>
            <li>Copy the link</li>
              </ul>
				
          
					</div>				
              </header>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img style={{width : "100%", maxHeight: '500px'}}  src={props.image.url} />
            </Modal.Body>
            <Modal.Footer>
              
              <LikeButton imageId={props.image._id} />
              <div class="comment-section">
                <CommentsImage comments={props.image.comments} />  
              </div>
              <AddComment image={props.image}/>
            </Modal.Footer>
          </Modal>
        </>
      );

}
 
ModalImage.propTypes = {
    image : PropTypes.object.isRequired,
    user : PropTypes.object.isRequired,
    toggle : PropTypes.bool
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

  let users = state.users;
	let userId = ownProps.image.user_id;

	if(userId && users.length > 0){

		user = getUserById(users, userId)
	}
  return {
     auth:state.auth,  
     user
  }
}


export default connect(mapStateToProps, {deleteImage})(withRouter(ModalImage));
