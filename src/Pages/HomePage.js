import React, { lazy, Suspense } from 'react'

function HomePage() {
  const Products = lazy(() => import('./Products'))
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Products />
    </Suspense>

  )
}

export default HomePage