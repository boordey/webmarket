import React from 'react';
// import Link from 'next/link';
import { urlFor  } from '../lib/client';




const Herobanner = ({heroBanner}) => {
  return (
      
    
    <div className='hero-banner-container'>
      
        
        
             <p className='beats-solo'>{ heroBanner.smallText}</p>
            <h3 className='midtext'>{heroBanner.midText}</h3>
            <h1>{heroBanner.largeText1}</h1>
            <img  src={urlFor(heroBanner.image)} height={200} alt = "headphones" className='hero-banner-image'/>
           
            <div className='lower-hero-banner'>
                {/* <Link href={`/product/${heroBanner.product}`} >
                    

                </Link> */}
                <button type='button'>{heroBanner.buttonText}</button>
                <div className='desc'>
                    <h5>description</h5>
                    <p>{heroBanner.desc}</p>
                </div>
            </div>

        
    </div>
   )
}

export default Herobanner