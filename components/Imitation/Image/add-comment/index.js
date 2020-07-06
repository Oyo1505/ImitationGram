import React, {useState, Component} from 'react';
import * as imageActions from "../../../../actions/";
import {useDropzone} from 'react-dropzone'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";

const  AddComment = (props) => {
    const [text, setText] = useState("");
    const [image, setImage] = useState(props.image);

    function copyTheCurrentObject (object) {
        let cloneObject = Object.assign({},object);
        return cloneObject;
    }
   async function addPost(event){
        event.preventDefault();
        let imageClone =copyTheCurrentObject(image);
        let comment = [props.auth.user._id, text ];
        imageClone.comments.push(comment);
        setText("");
        setImage(imageClone)
        await props.actions.updateImage(image);
    }
    return (
        <div style={{height:"37px", width:"100%"}}>
        <form onSubmit={addPost} className="form-add-comment">
            <textarea type="text" onChange={event => setText(event.target.value)} value={text} name="comment" placeholder="Votre commentaire"  />
            <input style={{padding:"10px 0"}} disabled={!text}  value='Publier' type="submit"/>
        </form>
            
        </div>
    );
}

AddComment.propTypes = {
    text : PropTypes.string,
    image : PropTypes.object.isRequired
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(imageActions, dispatch)
    }
  }
const mapStatetoProps =(state, ownProps)=>{
    
    return{
        auth: state.auth,
        image: ownProps.image
    }

}
export default connect(mapStatetoProps, mapDispatchToProps)(AddComment);