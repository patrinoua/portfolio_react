import React, { lazy, Suspense } from 'react'
import './App.css'
import Project from './components/Project'
const Header = lazy(() => import('./components/Header'))

function App() {
  return (
    <Suspense fallback={'Loading...'}>
      <Header />
      <Project />
      <p>Things to implement</p>
      <p>Step 2. Upload it to firebase (done)</p>
      <p>Step 3. Make a PWA out of it (half done)</p>
      <p>Step 4. Lazy loading (done)</p>
      <p>Step 5. Translation</p>
    </Suspense>
  )
}

export default App
