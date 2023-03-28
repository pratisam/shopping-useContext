import { useState, createContext } from "react";
import { faker } from '@faker-js/faker';
const productObj = [...Array(20)].map(() => ({
  id: faker.datatype.uuid(),
  nameS: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: faker.image.abstract(),
  inStock: faker.helpers.arrayElement([0, 2, 4, 7]),
  ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  fastDelivery: faker.datatype.boolean()
  
}))
export const CartContext = createContext(null);

const Context = ({ children }) => {
  // eslint-disable-next-line
  const [prod,setProd] = useState(productObj)
  return (

    <CartContext.Provider value={{prod}} >
      {children}
    </CartContext.Provider>


  )
}

export default Context

