'use client'
import React from 'react'
import { blog_data } from '../../../assets/assets.js'
import { assets } from '../../../assets/assets.js'
import Image from "next/image"

const ClientPage = ({ params }) => {
  const { id } = React.use(params)

  const data = blog_data.find(
    (item) => item.id === Number(id)
  )
    console.log(data);
    
  
  
  

  if (!data) {
    return <div>Blog not found</div>
  }

  return (
    <div className=' bg-gray-200 px-5 py-5 md:px-12 lg:px-28'>
      <div className=' flex justify-between items-center'>
        <Image src={assets.logo} alt='' width={180} className='w-32.5 sm:w-auto'/>
        <button className=' flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
          Get started <Image src={assets.arrow} alt='' />
          </button>

      </div>
     
    </div>
  )
}

export default ClientPage
