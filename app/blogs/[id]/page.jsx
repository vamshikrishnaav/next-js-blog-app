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

  return ( data?<>
    <div className=' bg-gray-200 px-5 py-5 md:px-12 lg:px-28'>
      <div className=' flex justify-between items-center'>
        <Image src={assets.logo} alt='' width={180} className='w-32.5 sm:w-auto'/>
        <button className=' flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
          Get started <Image src={assets.arrow} alt='' />
          </button>
      </div>
      <div className=' text-center my-24'>
          <h1 className=' text-2xl sm:text-5xl font-semibold max-w-175 mx-auto'>{data.title}</h1>
          <Image src={data.author_img} width={60} height={60} alt='' className='mx-auto mt-6 border border-white rounded-full'/>
          <p className=' mt-1 pb-2 text-lg max-w-185 mx-auto'>{data.author}</p>
      </div>
    </div>
    <div className=' mx-5 max-w-175 md:mx-auto mt-[-100] mb-100'>
      <Image src={data.image} alt='' width={1280} height={720}/>
    </div>
    </>
    :<></>
  )
}

export default ClientPage
