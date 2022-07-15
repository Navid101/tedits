import React from 'react'

const Pricing = ({item,index}) => {
  if(index){
    return (
      <div className='flex bg-darkGray rounded flex-col border w-full p-5 '>
        <h1 className='text-lg'>Pricing: {item.split(", ")[0]}</h1>
        <h1 className='text-lg'>Delivery Time: {item.split(", ")[1]}</h1>
      </div>
    )
  }else{
    return (
      <div className='flex flex-col rounded border w-full p-5 '>
        <h1 className='text-lg'>Pricing: {item.split(", ")[0]}</h1>
        <h1 className='text-lg'>Delivery Time: {item.split(", ")[1]}</h1>
      </div>
    )
  }
}

export default Pricing