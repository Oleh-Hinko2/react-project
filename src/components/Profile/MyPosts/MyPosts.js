import React from 'react';
import './MyPosts.scss';
import Post from './Post/Post';
const MyPosts = () => {
  let postData = [
    {id: 1, message: 'Hi, how are you', likesCount: 10},
    {id: 2, message: 'Hi, my first post', likesCount: 20}
  ]

  let postElements = postData.map((post) => {
    return (
        <Post message={post.message} like={post.likesCount} />
    );
  });
  return (
    <div className="myposts">
        <h3>My post</h3>
        <div>
           <div>
              <textarea placehholder="Hi"></textarea>
            </div>
            <div>
              <button>Add post</button>
            </div>
        </div>
        <div>
          {postElements}
        </div>
    </div>
  );
}

export default MyPosts;
