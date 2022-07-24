import { loadStripe} from '@stripe/stripe-js'

let stripePromise;

const getStripe = ()=>{
   if(!stripePromise) {
    //    stripePromise = loadStripe(process.env.NEXT_STRIPE_PUBLIC_PUBLISHABLE_KEY)
       stripePromise = loadStripe('pk_test_51L6mOPL1j2DajWkpyUfERPKGAS8v0svNqct8QnSbKlHph6syNg2EuRoj3GkErblxEdPs2P8kph53BjVc6Vr1NlH5006t8KweAj')
   }
   return stripePromise;
}

export default getStripe;