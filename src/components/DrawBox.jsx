import React from 'react';
import SmallDrawBox from './SmallDrawBox';
import './DrawBox.scss';
import DefaultProfile from '../assets/images/profile-mini.svg';
import Stars from './Stars';



export default function DrawBox({ img, userName, userProfile, satisfaction, review }) {
  return (
    <div className="DrawBox">
      <div className='imagecontainer'>
        <img src={img} alt="" />
        <div className='nicknamebox'>
          <p className='nickname'>{userName}</p>
          <img
            src={userProfile ? userProfile : DefaultProfile}
            alt="유저 프로필 이미지"
            className="sdb-user-profile-img"
				  />
        </div>
      </div>
      <div className='reviewcontainer'>
        <div className='satisfactioncontainer'>
          <p className='satisfaction'>만족도</p>
          <Stars n={satisfaction}/>
        </div>
        <div className='reviewtext'>
          {review}
        </div>
      </div>      
    </div>
  );
};

