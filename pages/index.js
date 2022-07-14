import Image from 'next/image'
import Grablink from 'youtube-thumbnail-grabber'
import { gql } from '@apollo/client/core'
import client from '../apolloClient'
import Link from 'next/link'
import Testimonials from '../components/Testimonials'


export default function Home({data}) {
  const {featureds,reviews} = data
  return (
    <div className="pt-24 flex flex-col space-y-24 items-center">
      <h1 className="text-3xl">Hi, My Name is Tasnim Omar</h1>
      <h1 className="text-3xl font-medium w-1/2 text-center">I’m a freelance video editor specializing in funny gaming videos</h1>
      <div className="grid xl:grid-cols-3 gap-10 pt-6">
        {
          featureds.map((item)=>{
            return(
              <div className='' key={item.id}>
                <Link  href={item.url} passHref><a target="_blank"><Image src={Grablink(item.url,'max')} width="1280px" height="720px" className="object-cover transition duration-300 hover:scale-125"></Image></a></Link>  
              </div>
            )
          })
        }
      </div>
      <Link href="/works" passHref><a><button className='transition bg-darkBlack text-paleWhite rounded py-2 px-3 tracking-widest duration-300 hover:scale-125'>VIEW MORE</button></a></Link>
      <Testimonials reviews={reviews}></Testimonials>
    </div>
  )
}

export const getStaticProps = async () => {
  const {data} = await client.query({
    query:gql`
    query MyQuery {
      featureds {
        url
        id
        author
      }
      reviews {
        picture {
          url
        }
        comment
        id
      }
    }
    `
  })
  return{
    props:{data}
  }
}

