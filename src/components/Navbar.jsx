import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul class="flex">
        <li class="mr-6">
          < Link class="text-blue-500 hover:text-blue-800" to={"/"}>Shop</Link>
        </li>
        <li class="mr-6">
          <Link class="text-blue-500 hover:text-blue-800" href="#">Cart</Link>
        </li>
        <li class="mr-6">
          <Link class="text-blue-500 hover:text-blue-800" href="#">Link</Link>
        </li>
        <li class="mr-6">
          <Link class="text-gray-400 cursor-not-allowed" href="#">Disabled</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
