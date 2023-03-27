import React,{useContext} from 'react'
import Filter from '../components/Filter'
import SingleProduct from '../components/SingleProduct'
import { CartContext } from '../context/Context'
import Context from '../context/Context'
import { faker } from '@faker-js/faker';
import ReducerBasic from '../context/Reducer'


const Shop = () => {
  const {prod} = useContext(CartContext)
  
  console.log(prod,"value")

  return (
    <div className='flex '>
      <article>
        <Filter/>
      </article>
    <div className='flex flex-row flex-wrap  md:flex-1 justify-evenly' >

      {/* <article className="mt-5 grid grid-cols-3 gap-10"> */}
      {prod.map((prod) => {
       return (        
        <SingleProduct prod ={prod} key={prod.id}/>
        )
      })}
      </div>

    {/* </article> */}
    </div>
  )
}

export default Shop
