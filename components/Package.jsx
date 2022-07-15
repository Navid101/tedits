import React from 'react'
import Pricing from './Pricing'

const Package = ({pricing, title, contents}) => {
  return (
    <div className='flex flex-col items-center space-y-5'>
        <div className='border rounded'>
            <h1 className={`text-lg font-medium text-center ${title} py-3`} >{title}</h1>
            {contents.map((content, index)=>{
                return(
                    index%2?<h1 key={index} className='bg-paleWhite w-full text-center px-6 py-3'>{content}</h1>:<h1 key={index} className='bg-darkGray w-full text-center px-6 py-3'>{content}</h1>
                )
            })}
        </div>
        {pricing.map((item,index)=>{
            return <Pricing key={index} item={item} index={index}></Pricing>
        })}
    </div>
  )
}

export default Package