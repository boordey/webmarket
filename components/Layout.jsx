import React  from 'react';
import Head from 'next/head';


import Navbar from './Navbar';
import FooterBase from './FooterBase';

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>bodstores</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
          {children}
      </main>
      <footer>
        <FooterBase />
      </footer>
    </div>
  )
}

export default Layout