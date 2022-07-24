import Stripe from 'stripe';

// const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY ); 
 
const stripe = new Stripe('sk_test_51L6mOPL1j2DajWkpuS8efrSqhyv03obLg6ALGhgc2e0sw621JXd2hqX0lMvJbNOAQfpD6Tow80V4y2CwVzTJnDdA00jLMoFz4v'); 
 

export default async function handler (req,res){
    if(req.method === 'POST'){

        // console.log(req.body.cartItems)
        try{
            const params = {
                submit_type: 'pay',
                mode:'payment',
                payment_method_types: ['card'],
                billing_address_collection : 'auto',
                shipping_options: [
                  { shipping_rate: 'shr_1L6oSZL1j2DajWkpgyb571vQ'}
                ],
                line_items: [
                    {
                        //provides the exact price ID
                        price:'{{PRICE_ID}}',
                        quantity: 1,
                    },
                ],
                line_items: req.body.map((item)=>{
                    const img = item.image[0].asset._ref;
                    const newImage = img.replace('image-', 'https://cdn.sanity.io/images/t1qshpu7/production').replace('-webp','webp');
                return{
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: item.name,
                            images: [newImage ],
                        },
                        unit_amount: item.price * 100, 
                    },
                    adjustable_quantity: {
                        enabled:true,
                        minimum: 1,
                    },
                    quantity: item.quantity
                }
                
                
                }),
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/canceled`,
            }
             //create  checkout session for body params
             const session = await stripe.checkout.sessions.create(params);
             res.status(200).json(session);

            }
            catch(err){
                res.status(err.statusCode || 500).json(err.message);

            }
    } else{
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method Not Allowed')
    }
}