import React from 'react';
import {client} from '../lib/client'
import{ Product,Herobanner, Footer} from '../components';

const home = ({products, bannerData}) => {
  return (

    <div>
     <Herobanner heroBanner={bannerData.length && bannerData[0]}  />
     
     <div className='products-heading'>
       <h2>Best selling product</h2>
       <p>varies in colors</p>
     </div> 
     <div className='products-container'>
       {products?.map((product)=> <Product key={product._id} 
       product={product} /> )
       }
     </div>
      <Footer footerBanner ={bannerData && bannerData[0]} />
    </div>
    
    
  ) 
}
export const getServerSideProps = async()=>{
  const query  ='*[_type == "product"]';
  const products = await client.fetch(query)
  const bannerquery ='*[_type == "banner"]'
  const bannerData = await client.fetch(bannerquery)
  return {
    props: {products, bannerData}
  }
}

export default home