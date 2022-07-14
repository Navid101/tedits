import React from 'react'
import Review from './Review'

const Testimonials = ({reviews}) => {
  return (
    <div className='w-full flex flex-col items-center space-y-24'>
        <h1 className='text-4xl font-bold tracking-widest'>TESTIMONIAL</h1>
        <div className='grid xl:grid-cols-2 gap-10 pt-6 w-full'>
        {
          reviews.map((review)=>{
            return <Review key={review.id} review={review}/>
          })
        }
        </div>
    </div>
  )
}

export default Testimonials