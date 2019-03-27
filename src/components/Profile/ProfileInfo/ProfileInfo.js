import React from 'react';
import './ProfileInfo.scss';

const ProfileInfo = () => {
  return (
      <div className="ProfileInfo">
        <div className="photo-block">
          <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpA3c9sxwW543ZeM_w6JWCYlVUa3Paw6zKvhUGTXjihi03w7qaOg" />
        </div>
        <div className="description-block">
          ava + description
        </div>
      </div>
  );
}

export default ProfileInfo;
