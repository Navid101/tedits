import React from 'react'
import client from '../apolloClient'
import { gql } from '@apollo/client/core'
import Package from '../components/Package'
import Custom from '../components/Custom'
const packages = ({data}) => {
  const {packages, customs} = data
  return (
    <div className="pt-12 xl:pt-24 flex flex-col items-center space-y-12">
      <div className='w-full flex flex-col xl:flex-row items-center xl:items-start space-y-24 xl:space-y-0 xl:space-x-24 justify-between'>
      {packages.map((item)=>{
        return <Package key={item.id} title={item.title} contents={item.content} pricing={item.pricing}></Package>
      })}
      </div>
      <span className='w-full bg-darkGray h-[1px]'></span>
      <Custom content={customs}></Custom>
    </div>
  )
}

export default packages

export const getStaticProps = async ()=>{
  const {data} = await client.query({
    query:gql`
    query MyQuery {
      packages {
        pricing
        title
        content
        id
      }
      customs {
        content
        title
        id
      }
    }
    `
  })
  return{
    props:{data}
  }
}