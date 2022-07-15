import React from 'react'
import { gql } from '@apollo/client/core'
import client from '../apolloClient'
import Grablink from 'youtube-thumbnail-grabber'
import Image from 'next/image'
import Link from 'next/link'
const works = ({data}) => {
  const {works} = data
  const newWorks = works.slice().sort((a, b) => b.rating - a.rating)

  
  return (
    <div className="pt-12 xl:pt-24 flex flex-col space-y-24 items-center">
      <div className="grid xl:grid-cols-3 gap-10 ">
        {
          newWorks.map((item)=>{
            return(
              <div className='' key={item.id}>
                <Link href={item.url} passHref><a target="_blank"><Image src={Grablink(item.url,'max')} width="1280px" height="720px" className="object-cover transition duration-300 hover:scale-125"></Image></a></Link> 
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default works

export const getStaticProps = async () => {
  const {data} = await client.query({
    query:gql`
    query MyQuery {
      works {
        id
        url
        author
        rating
      }
    }
    `
  })
  return{
    props:{data}
  }
}