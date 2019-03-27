import React from 'react';
import './MyPosts.scss';
import Post from './Post/Post';
const MyPosts = () => {
  return (
    <div className="myposts">
        <h3>My post</h3>
        <div>
           <div>
              <textarea></textarea>
            </div>
            <div>
              <button>Add post</button>
            </div>
        </div>
        <div>
            <Post message="Hi, how are you" like="10" />
            <Post message="Hi, my first post" like="20" />
        </div>
    </div>
  );
}

export default MyPosts;
