import React, { useContext } from 'react'
import { createContext,useReducer } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducer';


const Cart = createContext()
faker.seed(99)
const Context = ({children}) => {
//    let userId=  faker.datatype.uuid()
// console.log(userId)

// let userId =   faker.commerce.productName()
    const products =[...Array(20)].map(() => ({
        id:faker.datatype.uuid(),
        nameS : faker.commerce.productName(),
        price : faker.commerce.price(),
        image: faker.image.abstract(),
        inStock:faker.helpers.arrayElement([0,2,4,7]),
        ratings: faker.helpers.arrayElement([1,2,3,4,5]),
        fastDelivery : faker.datatype.boolean()
    }))
    // console.log(products,"product")
    const [state, dispatch] = useReducer(cartReducer, {
        products:products,
        cart:[]
    });
  return (
    <Cart.Provider value={{state, dispatch}}>
      {children}
    </Cart.Provider>
  )
}

export default Context
export const CartState = () => {
    return useContext(Cart)
}