import React from 'react'

const Letter = ({name}) => {
  return (
    <div className="flex flex-col items-center space-y-6 w-full pb-12">
        <h1 className='text-2xl md:text-3xl  text-left '>Dear {name},</h1>
        <h1 className='text-2xl md:text-3xl  md:text-left '>Thank you for reaching out to me</h1>
        <h1 className='text-2xl md:text-3xl  md:text-left '>I will get in touch with you soon</h1>
        <h1 className='text-2xl md:text-3xl  md:text-left '>Wishing you a wonderful day!</h1>
        <h1 className='text-2xl md:text-3xl  md:text-left '>Sincerely,</h1>
        <h1 className='text-2xl md:text-3xl  md:text-left '>Tasnim</h1>
    </div>
  )
}

export default Letter