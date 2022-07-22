import React from 'react';
import {
  FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter
} from 'react-icons/fa';

const handleSocialMediaClick = () => {
  console.log(`Clicked A social Media Button`);
};

function SocialMediaBar() {
  const iconArray = [<FaFacebookSquare />, <FaInstagram />, <FaPinterest />, <FaTwitter />];
    
  return (
    <div id='socialMediaBar'>
      {iconArray
        .map((icon, index) => <button key={`SocialKey${index}`} type='button' className='socialMediaButton' onClick={handleSocialMediaClick}>{icon}</button>)}
    </div>
  );

}

export default SocialMediaBar;