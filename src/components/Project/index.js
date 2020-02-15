import React, { lazy, Suspense } from 'react'
// const Header = lazy(() => import('./components/Header'))

const Project = ({
  title = 'No title',
  description = 'No desc',
  snapshot = 'no snapshot'
}) => {
  return (
    <Suspense fallback={'Loading Projects...'}>
      <p>{title}</p>
      <p>{description}</p>
      <p>{snapshot}</p>
    </Suspense>
  )
}

export default Project
