import React, { lazy, Suspense } from 'react'
import './App.css'
import About from './components/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact'
import { Element, animateScroll as scroll } from 'react-scroll'

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
      <div className='appContainer'>
        <Header />

        <Element name='about' className='element'>
          <About />
        </Element>
        <Element name='projects' className='element'>
          <Projects />
        </Element>
        <Element name='contact' className='element'>
          <Contact />
        </Element>

        <div id='footer'>
          <span>© 2020 Angeliki Patrinou </span>
        </div>
        {/* <p>Things to implement</p>
      <p>Step 2. Upload it to firebase (done)</p>
      <p>Step 3. Make a PWA out of it (half done)</p>
      <p>Step 4. Lazy loading (done)</p>
      <p>Step 5. Translation</p>
      <p>Step 6. Responsiveness(done) - To do: for big screens</p>
      <p>Step 7. connect Header navigation items to places in the screen (done)</p>
      
      I am doing this in order to:
      - have google analytics 
      - implement routing between different pages. 
      - have different pages with services, showcase projects etc. 
      
      */}
      </div>
    </Suspense>
  )
}

export default App
