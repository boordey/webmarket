import React from 'react';
import { Toaster } from 'react-hot-toast';
import {Layout} from '../components';
import { StateContext } from '../context/StateContext';

import '../styles/globals.css'

// if (typeof window === 'object') {
//   // mark that the app was server-side rendered
//   window.__WAS_SSR = true
// }


// const Incrementer = () => {
//   // always initialize the state to `0`
//   const [value, setValue] = useState(0)
//   let className = 'zero'

//   if (value < 0) {
//     className = 'negative'
//   } else if (value > 0) {
//     className = 'positive'
//   }

//   useEffect(() => {
    // once we've hydrated on the client w/ the initial
    // render, check to see if we have a value stored
    // in `localStorage`. if so, update `value`. this
    // will result in a second render.
    // (no need to check for existence of `window` cuz
    // it's guaranteed to be there)
//     const storedValue = window.localStorage.getItem('value')

//     if (storedValue) {
//       setValue(parseInt(storedValue, 10))
//     }
//   }, [])

//   return (
//     <div className={className}>
//       <button onClick={() => setValue((curValue) => curValue - 1)}>-</button>
//       <span>{value}</span>
//       <button onClick={() => setValue((curValue) => curValue + 1)}>+</button>
//     </div>
//   )
// }
       
function MyApp({ Component, pageProps }) {
  return(
    <StateContext>
       <Layout>
      <Toaster />
    <Component {...pageProps} />
    </Layout>
    </StateContext>
    
    ) 
   
   

}

export default MyApp
