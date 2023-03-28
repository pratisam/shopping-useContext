import React from 'react'
import { useContext } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography
} from "@material-tailwind/react";
import { ReducerContext } from '../context/Reducer';
const SingleCart = ({prod}) => {
    // eslint-disable-next-line
const { state, dispatch  } = useContext(ReducerContext)

    console.log(prod,"prod from cart")
    const increaseQuantity =() => {
        dispatch({
            type: "UPDATE_CART",
            payload: prod,
          })
    }
    const decreaseQuantity =() => {
        dispatch({
            type: "REDUCE_FROM_CART",
            payload: prod,
          })
    }
    const deleteQuantity =() => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: prod,
          })
    }
  return (
    <div>
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
            
          </Typography>
      </CardBody>
      <CardFooter className="flex justify-evenly  gap-7 pt-1">
        <div>
            <div>
                <button onClick={decreaseQuantity}>-</button>
                {prod.qty}
                <button onClick={increaseQuantity}>+</button> 
            </div>
            <div>
                <button onClick={deleteQuantity}>Delete</button>
            </div>
        </div>


      </CardFooter>
      </Card>
    </div>
  )
}

export default SingleCart
