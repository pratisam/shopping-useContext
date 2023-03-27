import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography
} from "@material-tailwind/react";
import Rating from './Rating';
// import { CartState } from '../context/Context';
// import Cart from '../pages/Cart';

const SingleProduct = ({ prod }) => {

    const quantity = 1

    return (
        <Card className="w-60 m-4 overflow-hidden shadow-lg rounded-none ">
            <CardHeader floated={false} className="h-40 rounded-none">
                <img  alt="profile" src={prod.image}   className="h-60 "/>
            </CardHeader>
            <CardBody className="text-center">
                <Typography color="blue" className="font-medium" textGradient>
                    $ {prod.price}
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                {prod.nameS}
                </Typography>
                <Typography color="blue" className="font-medium flex justify-evenly" textGradient>
                   {prod.fastDelivery?(<span>Fast Delivery</span>):(<span>4 day Delivery</span>)}
                   <Rating rating={prod.ratings}/>
                </Typography>
                {/* <Typography color="blue" className="font-medium" textGradient>
                </Typography> */}
            </CardBody>
            <CardFooter className="flex justify-evenly  gap-7 pt-1">
                {/* <Tooltip content="Like">
                </Tooltip> */}
                <div>
                {quantity===0? (
                    <button disabled={!prod.inStock} className=' border-solid p-1 bg-cyan-600'>
                    {!prod.inStock?"out of stock":" Add to cart"}</button>
                    ): (<div className=' justify-centre'>
                            <div className='flex justify-centre'>
                            <button  className=' border-solid p-1 bg-cyan-600'>
                                -
                            </button>
                            <div className='m-1'>
                                {quantity} in cart
                            </div>
                            <button  className=' border-solid p-1 bg-cyan-600'>
                                +
                            </button>
                            </div>
                            <button className=' border-solid p-1 mt-2 bg-red-600'>
                                Remove Item
                            </button>
                        </div>)
                }
                </div>
            

            </CardFooter>
        </Card>
    )
}


export default SingleProduct
// {/* <CardFooter className="flex justify-evenly  gap-7 pt-1"> */}
// {/* <Tooltip content="Like">
// </Tooltip> */}
// {/* {
//     cart.some((p) => p.id === prod.id) ? (
        // <button onClick = { () =>

        //    { dispatch({type:'RemoveCart',payload:prod})
        //         console.log('test', cart)}} 
        //   className=' border-solid p-1 bg-red-600'>Remove Item</button>

//     ): (

//         <button onClick = {handleClick} disabled={!prod.inStock} className=' border-solid p-1 bg-cyan-600'>
//         {!prod.inStock?"out of stock":" Add to cart"}
    
//         </button>
//     )
// }