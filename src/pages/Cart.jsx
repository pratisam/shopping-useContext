import React,{useContext} from 'react'
import {ReducerContext} from '../context/Reducer'
import SingleCart from './SingleCart';

const Cart = () => {
  const { state, dispatch  } = useContext(ReducerContext)
  console.log(state,"state from cart")
  
  
  return (
    <div className='flex flex-row flex-wrap  md:flex-1 justify-evenly' >

      {/* <article className="mt-5 grid grid-cols-3 gap-10"> */}
      {state.cart.map((prod) => {
       return (        
        <SingleCart prod ={prod} key={prod.id}/>
        )
      })}
      </div>
  )
}

export default Cart
