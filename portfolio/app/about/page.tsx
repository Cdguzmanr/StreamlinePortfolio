import React from 'react'
import BlogSection from '@/components/BlogSection';
import AboutIntro from '@/components/AboutIntro';


const page = () => {
  return (
    <div className='bg-bone min-h-screen'>

      {/* Introduction text */}
      <AboutIntro />

      {/* List of Blogs */}
      <BlogSection/>
    </div>
  )
}

export default page