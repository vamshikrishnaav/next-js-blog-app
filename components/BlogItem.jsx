import React from 'react'
import Image from 'next/image'
import Link from 'next/link.js'
import {assets,} from "../assets/assets.js"

const BlogItem = ({title,category,description,image,id}) => {
  return (
    <>
    <div className='w-full bg-white border border-black hover:shadow-[-7px_7px_0px_#000000] overflow-hidden'>
      <Link href={`/blogs/${id}`}>
     <Image src={image} alt='' width={400} height={400} className='w-full h-auto border-b border-black'/>
      </Link>
     <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
     <div className="p-5">
        <h5>{title}</h5>
        <p className=' mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
        <Link href={`/blogs/${id}`}>
        <div className=' inline-flex py-2 items-center text-center'>
          Read more <Image src={assets.arrow} alt='' width={12} height={12} className='ml-2'/>
        </div>
        </Link>
     </div>
    </div>
    </>
  )
}

export default BlogItem