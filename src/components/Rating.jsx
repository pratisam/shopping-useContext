import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

const Rating = ({rating, onClick}) => {
  return (
    <div className='flex '>
      {
        [...Array(5)].map((value,i) => (

            <span  key={i} onClick={() => onClick(i)}>
                {rating>i? (
                    <StarIcon className='text-cyan-500 w-4' />
                ):(
                    <StarIcon className=' w-4'/>
                )}
                
            </span>
        ))
      }
    </div>
  )
}

export default Rating
