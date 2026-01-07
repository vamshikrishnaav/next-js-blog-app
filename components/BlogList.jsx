"use client"
import { blog_data } from '@/assets/assets'
import BlogItem from '@/components/BlogItem'
import React, { useState } from 'react'

const BlogList = () => {
    const [menu,setMenu] = useState("All")
  return (
    <div className="container mx-auto px-4">
      <div className='flex justify-center gap-6 my-10'>
        <button onClick={()=>setMenu('All')} className={menu==="All"?'bg-black text-white px-4 py-1 rounded-sm':""}>All</button>
        <button onClick={()=>setMenu('Technology')} className={menu==="Technology"?'bg-black text-white px-4 py-1 rounded-sm':""}>Technology</button>
        <button onClick={()=>setMenu('Startup')} className={menu==="Startup"?'bg-black text-white px-4 py-1 rounded-sm':""}>Startup</button>
        <button onClick={()=>setMenu('Lifestyle')} className={menu==="Lifestyle"?'bg-black text-white px-4 py-1 rounded-sm':""}>Lifestyle</button>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-10 mb-16 xl:mx-24'>
        {blog_data.filter((item) => menu ==="All"?true:item.category===menu).map((item,index)=>{
          return (
            <BlogItem
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
              id={item.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default BlogList