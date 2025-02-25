import React from 'react'
import ProjectsPage from '@/components/ProjectsPage'
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading projects...</div>}>
      <ProjectsPage />
    </Suspense>
  )
}

export default page