import React, { lazy, Suspense } from 'react'
import './App.css'
// import Header from './components/Header'
const Header = lazy(() => import('./components/Header'))

function App() {
  return (
    <Suspense fallback={'Loading...'}>
      <header className='App-header'>
        <p>This is my new portfolio webpage</p>
        <p>Step 2. Upload it to firebase (done)</p>
        <p>Step 3. Make a PWA out of it (half done)</p>
        <p>Step 4. Lazy loading</p>
        <Header />
      </header>
    </Suspense>
  )
}

export default App
