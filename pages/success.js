import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from 'react-icons/bs'
import {useStateContext} from '../context/StateContext'

 
const success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities} = useStateContext()
    
    useEffect(()=>{
        localStorage.clear()
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
    }, [])
  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
            <BsBagCheckFill />
            </p>
            <h2>Thank You For Your Order!</h2>
            <p className='email-msg'>Check Your Email inbox for the Reciept</p>
            <p className='description'>if you have any questions, send mail to
            <a className='email' href='mailto:bodeblaze@gmail.com'>bodeblaze@gmail.com</a></p>
            <Link href='/'>
                <button type='button' width='300px' className='btn'>Continue Shopping</button>
            </Link>
        </div>
    </div>
  )
}

export default success