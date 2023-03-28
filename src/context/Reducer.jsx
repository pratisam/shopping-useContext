// import { useReducer } from 'react';
// export const cartReducer = (state, action) => {
//     switch(action.type){
//         case "AddtoCart" :
//             return {...state, cart:[...state.cart,{...action.payload, qty:1}]}
//          case "RemoveCart" :
//             return {...state,cart:state.cart.filter(cart=>cart.id!==action.payload.id)}
        
//         default:
//             return state;
//     }
// }
import { useState,useReducer,createContext } from "react"
export const ReducerContext = createContext();
const defaultState = {
    cart:[]
}
const reducer = (state, action) => {
    console.log(action,"action")
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, qty: 1 }],
        };
      case "REMOVE_FROM_CART":
        return {
            ...state,
            cart:[ ...state.cart.filter((c) => c.id !== action.payload.id)],
          };
          case "UPDATE_CART":
            return {
              ...state,
              cart: state.cart.map((c) =>
                c.id === action.payload.id ? { ...c, qty: c.qty + 1 } : c
              ),
            };
            case "REDUCE_FROM_CART":
                return {
                  ...state,
                  cart: state.cart.map((c) =>
                    c.id === action.payload.id ? { ...c, qty: c.qty - 1 } : c
                  ),
                };
        //REDUCE_FROM_CART
      default:
        return state;
    }
      
  };
const ReducerBasic =({children}) => {

   const [state,dispatch] = useReducer(reducer,defaultState)
    // const [cartObj,setCartObj] = useState(null)
    console.log(state)
    return (
    <ReducerContext.Provider value={{state, dispatch}}>
        {children}
    </ReducerContext.Provider>
    )
}
export default ReducerBasic