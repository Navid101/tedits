import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
        <div className='flex flex-col space-y-6 xl:space-y-0 '>
            <div className='h-12 w-12 xl:hidden block '>
                <Image src="/assets/logo.png" width="447px" height="521px" layout='responsive' alt='Logo' className='object-cover'></Image>
            </div>
            <div className='flex  items-center w-full justify-between'>
                <Link href="/"><a className='transition text-xl hover:text-fadeRed'>HOME</a></Link>
                <Link href="/works"><a className='transition text-xl hover:text-fadeRed'>WORKS</a></Link>
                <div className='h-12 w-12 hidden xl:block'>
                    <Image src="/assets/logo.png" width="447px" height="521px" layout='responsive' alt='Logo' className='object-cover'></Image>
                </div>
                <Link href="/packages"><a className='transition text-xl hover:text-fadeRed'>PACKAGES</a></Link>
                <Link href="/contact"><a className='transition text-xl hover:text-fadeRed'>CONTACT</a></Link>
            </div>
        </div>
  )
}

export default Header