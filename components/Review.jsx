import React from 'react'

const Review = ({review}) => {

  return (
    <div className='bg-lightGray flex flex-col items-center space-y-6 py-8 px-6 '>
        {review.picture && 
            <img src={review.picture.url} alt=""  className='h-24 w-24 rounded-full object-cover' />
        }
        <h1 className='text-darkBlack text-xl text-center'>{review.comment}</h1>
    </div>
  )
}

export default Review