import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
        <div className='flex flex-col space-y-6 xl:space-y-0 '>
            <div className='h-12 w-12 xl:hidden block '>
                <img src="https://media.discordapp.net/attachments/235680551363674112/997039578043121674/000116154244_326803261677684_2838756276716891239_n.png?width=592&height=676" width="447px" height="521px" layout='responsive' alt='Logo' className='object-cover'></img>
            </div>
            <div className='flex  items-center w-full justify-between'>
                <Link href="/"><a className='transition text-xl hover:text-fadeRed'>HOME</a></Link>
                <Link href="/works"><a className='transition text-xl hover:text-fadeRed'>WORKS</a></Link>
                <div className='h-12 w-12 hidden xl:block'>
                    <img src="https://media.discordapp.net/attachments/235680551363674112/997039578043121674/000116154244_326803261677684_2838756276716891239_n.png?width=592&height=676" width="447px" height="521px" layout='responsive' alt='Logo' className='object-cover'></img>
                </div>
                <Link href="/packages"><a className='transition text-xl hover:text-fadeRed'>PACKAGES</a></Link>
                <Link href="/contact"><a className='transition text-xl hover:text-fadeRed'>CONTACT</a></Link>
            </div>
        </div>
  )
}

export default Header