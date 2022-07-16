import React from 'react'
import Item from '../components/Item'
import Email from '../components/Email'
const data=[
  {
    logo:'discord',
    content:'Tasnim#7826',
  },
  {
    logo:'twitter',
    content: '@TasnimEdits',
    link:'https://twitter.com/TasnimEdits'
  },
  {
    logo:'mail',
    content:'TasnimEdits@gmail.com',
    link:'TasnimEdits@gmail.com'
  }
]

const contact = () => {
  return (
    <div className='pt-12 xl:pt-36 w-full flex flex-col-reverse space-y-12 space-y-reverse xl:space-y-0 items-center xl:flex-row  justify-between'>
      <div className='flex flex-col space-y-12 xl:space-y-36'>
        {data.map((item,index)=>{
          return <Item item={item} key={index}></Item>
        })}
      </div>
      <div className='w-full xl:w-1/3'>
        <Email></Email>
      </div>
    </div>
  )
}

export default contact