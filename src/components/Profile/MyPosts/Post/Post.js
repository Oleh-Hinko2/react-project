import React from 'react';
import './Post.scss';

const Post = (props) => {
  return (
    <div className="myposts">
        {props.message}
        <div>
            <span>{props.like}</span>  
        </div>
    </div>
  );
}

export default Post;
