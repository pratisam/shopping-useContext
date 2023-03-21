import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Rating from './Rating';

const SingleProduct = ({ prod }) => {
    return (
        <Card className="w-60 m-4 overflow-hidden shadow-lg rounded-none ">
            <CardHeader floated={false} className="h-40 rounded-none">
                <img  src={prod.image}  alt="profile-picture" className="h-60 "/>
            </CardHeader>
            <CardBody className="text-center">
                <Typography color="blue" className="font-medium" textGradient>
                    <span>$ {prod.price} </span>
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                {prod.nameS}
                </Typography>
                <Typography color="blue" className="font-medium flex justify-evenly" textGradient>
                   {prod.fastDelivery?(<div>Fast Delivery</div>):(<div>4 day Delivery</div>)}
                   <Rating rating={prod.ratings}/>
                </Typography>
                <Typography color="blue" className="font-medium" textGradient>
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-evenly  gap-7 pt-1">
                {/* <Tooltip content="Like">
                </Tooltip> */}
               <button className=' border-solid p-1 bg-red-600'>Remove Item</button>
            
               <button disabled={!prod.inStock} className=' border-solid p-1 bg-cyan-600'>
                {!prod.inStock?"out of stock":" Add to cart"}
               
                </button>

            </CardFooter>
        </Card>
    )
}

export default SingleProduct
{/* <div className='m-4'>
      <div className="cursor-pointer relative " key={prod.id}>
        <img src={prod.image} 
            className="foto w-60 h-60 object-cover"
            alt="description" />
        <p>{prod.nameS}</p>
        </div>
    </div> */}