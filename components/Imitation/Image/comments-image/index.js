import React, {useState, Component} from 'react';
import CommentItem from '../comment-item/';

const CommentsImage = (props) =>{
    const comments = props.comments;
    
    const commentItem = comments.map(comment =>{
       return <CommentItem comment={comment}/>;
    } )
    return(
        <div style={{ overflow:'auto', textAlign:'left'}}>
           {commentItem}
        </div>
    );


}

export default CommentsImage;