import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Tooltip } from '@material-tailwind/react'

const Navbar = () => {
  return (
    <div className="flex justify-between bg-gray-200 ">
      <div>
        <span className=' '>shopping</span>
      </div>
      <div className="flex justify-center">
  <div className="relative mb-3 xl:w-96" data-te-input-wrapper-init>
    <input
      type="search"
      className="peer block h-4 mt-1.5 w-full rounded border-indigo-600 border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
      id="exampleSearch2"
      placeholder="Type query" />
    <label
      className="pointer-events-none absolute top-0 left-3   text-xs max-w-[25%] origin-[0_0] truncate pt-[0.35rem] leading-[1.5] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.25rem] peer-focus:scale-[0.5] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.4rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
      >Search
      </label>
  </div>
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
            <ShoppingCartIcon className="h-3 w-3 text-blue-500" />
          </li>

        </ul>
      </div>
    </div>

  )
}

export default Navbar
