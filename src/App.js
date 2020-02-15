import React, { lazy, Suspense } from 'react'
import './App.css'
import Project from './components/Project'
import About from './components/About'
import { H1 } from './components/Typography'

const Header = lazy(() => import('./components/Header/index'))

function App() {
  const projects = [
    {
      title: 'name1',
      description: 'description1',
      snapshot: 'snapshot..'
    }
  ]
  return (
    <Suspense fallback={'Loading...'}>
      <div class='appContainer'>
        <Header />
        <About />
        <H1>Projects</H1>
        {projects.map(project => (
          <Project
            title={project.title}
            description={project.description}
            snapshot={project.snapshot}
          />
        ))}

        {/* <p>Things to implement</p>
      <p>Step 2. Upload it to firebase (done)</p>
      <p>Step 3. Make a PWA out of it (half done)</p>
      <p>Step 4. Lazy loading (done)</p>
      <p>Step 5. Translation</p>
      <p>Step 6. Responsiveness</p>
      
      I am doing this in order to have google
      analytics enabled. Also implement routing between different pages. And
      have different pages with services, showcase projects etc. */}
      </div>
    </Suspense>
  )
}

export default App
