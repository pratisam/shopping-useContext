import React, { useState } from 'react'
import Rating from './Rating'
const Filter = () => {
    const [rating, setRating] = useState('')
  return (
    <div className=''>
        <form  className=''>
        <fieldset className='flex flex-col'>
            <legend>Filter</legend>
            <label><input type="radio" name="radio" value="yes" /> Ascending</label>
            <label><input type="radio" name="radio" value="no" /> Decending</label>
            <label><input type="checkbox" name ="checkbox" />Include out of stock</label>
            <label><input type="checkbox" name ="checkbox" />Fast delivery option</label>
            <span className='flex'> 
            <label>Rating :  </label>
            <Rating  rating={rating} onClick ={(i) =>  setRating(i+1)}/>
            </span>

        </fieldset>
        <button>Clear Filter</button>
        </form>
    </div>
  )
}

export default Filter
