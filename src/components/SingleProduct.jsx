import React,{useContext, useState} from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography
} from "@material-tailwind/react";
import Rating from './Rating';
import { ReducerContext } from '../context/Reducer';
// import { CartState } from '../context/Context';
// import Cart from '../pages/Cart';

const SingleProduct = ({ prod }) => {
    const[quantity,setQuantity] = useState(0)
    // eslint-disable-next-line
    const { state, dispatch  } = useContext(ReducerContext)

    const AddToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: prod,
          })
          setQuantity(quantity+1)
          
    }
    
    const RemoveFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: prod,
          })
          setQuantity(0)
    }

    const updateCart = () => {
        dispatch({
            type: "UPDATE_CART",
            payload: prod,
          })
          setQuantity(quantity+1)
    }
    const reduceFromCart = () => {
        dispatch({
            type: "REDUCE_FROM_CART",
            payload: prod,
          })
          setQuantity(quantity-1)
    }
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
            </CardBody>
            <CardFooter className="flex justify-evenly  gap-7 pt-1">
                {/* <Tooltip content="Like">
                </Tooltip> */}
                <div>
                {quantity===0? (
                    <button disabled={!prod.inStock} onClick={AddToCart} className=' border-solid p-1 bg-cyan-600'>
                    {!prod.inStock?"out of stock":" Add to cart"}</button>
                    ): (<div className=' justify-centre'>
                            <div className='flex justify-centre'>
                            <button onClick={reduceFromCart} className=' border-solid p-1 bg-cyan-600'>
                                -
                            </button>
                            <div className='m-1'>
                                {quantity} in cart
                            </div>
                            <button onClick={updateCart} className=' border-solid p-1 bg-cyan-600'>
                                +
                            </button>
                            </div>
                            <button onClick={RemoveFromCart} className=' border-solid p-1 mt-2 bg-red-600'>
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
