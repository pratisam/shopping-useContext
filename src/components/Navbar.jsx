import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCartIcon} from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <span>shopping</span>
      </div>
      <div>
      <ul className="flex">
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to={"/"}>Shop</Link>
        </li>
        <li className="mr-6 mr-1">
          <Link className="text-blue-500 hover:text-blue-800" to={"/cart"}>Cart</Link>
        </li>
        <li className="mt-2 mr-6" >
        <ShoppingCartIcon className="h-3 w-3 text-blue-500"/>
        </li>
        
      </ul>
    </div>
    </div>
    
  )
}

export default Navbar
