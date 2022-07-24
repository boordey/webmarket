import React from 'react';
 import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const FooterBase = () => {
  return (
    <div className='footer-container'>
        <p>2022 Bodstores All Rights Reserved</p>
          <p className='icons'>
              <AiFillInstagram />
              <AiOutlineTwitter />
          </p>
 
    </div>
    
  )
}

export default FooterBase;