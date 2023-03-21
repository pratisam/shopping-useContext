import React,{useContext} from 'react'
import Filter from '../components/Filter'
import SingleProduct from '../components/SingleProduct'
import { CartState } from '../context/Context'


const Shop = () => {
  const {state : {products}} = CartState()
  console.log(products,"shop-state")
  return (
    <div className='flex '>
      <article>
        <Filter/>
      </article>
    <div className='flex flex-row flex-wrap  md:flex-1 justify-evenly' >

      {/* <article className="mt-5 grid grid-cols-3 gap-10"> */}
      {products.map((prod) => {
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
