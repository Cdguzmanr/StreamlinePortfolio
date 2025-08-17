import React from 'react'
import ProjectsPage from '@/components/projects/ProjectsPage2'
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={
      <div className='bg-bone h-screen flex flex-col items-center justify-center px-6'>Loading projects...</div>
      }>
      
      <ProjectsPage />

    </Suspense>
  )
}

export default page