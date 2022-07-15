import React from 'react'

const Custom = ({content}) => {
    console.log(content[0])
  return (
    <div className='px-[100px] py-6 border rounded flex flex-col items-center space-y-6'>
        <h1 className='text-lg font-medium'>{content[0].title}</h1>
        {content[0].content.map((item, index)=>{
            return  <h1 className='text-lg ' key={content[0].id}>{item}</h1>
        })}
    </div>
  )
}

export default Custom