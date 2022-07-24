import React from 'react';
// import Link from 'next/link';
import Image from 'next/image';
import Iphone from '../assets/headphones.png';

  // import { urlFor } from '../lib/client';

const Footer = ({footerBanner: {
   largeText1, largeText2, saleTime,smallText, midText, image, desc,product, buttonText
} })=>{
  return(
    <div className="footer-banner-container">
      <div className="banner-desc">
         <div className="banner-left">
           <h3>{largeText1}</h3>
           <h3>{largeText2}</h3>
           <h3>{saleTime}</h3>
         </div>
         
         <Image  src={Iphone}
           width={250}
           height={250}
           className="footer-banner-image"/>
              
        

         <div className="banner-right"> 
           <p>{smallText}</p>
           <h3>{midText}</h3>
           <p>{desc}</p>
           {/* <Link href={`/product/${product}`}>
             
           </Link> */}
           <button type='button'>{buttonText}</button>
         </div>
         
           
        
        </div>
      
      

    </div>
  )
}



 export default Footer