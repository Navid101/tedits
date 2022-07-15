import React from 'react'
import Link from 'next/link'
const Item = ({item}) => {
  return (
    <div className='flex space-x-6 xl:space-x-24  items-center'>
        <img src={`/assets/${item.logo}.png`} className="h-[30px] md:h-[40px] xl:h-[50px]"></img>
        {!item.link? 
        <h1 className='text-2xl'>{item.content}</h1>
        :
        item.logo==="twitter"?
        <Link href={item.link}><a target="_blank" className='text-2xl'>{item.content}</a></Link>
        :
        <a className='text-2xl' href={`mailto:${item.link}.com`}>{item.link}</a>
        }
    </div>
  )
}

export default Item