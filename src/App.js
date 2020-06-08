import React, { lazy, Suspense, useEffect } from 'react'
import './App.css'
import About from './components/About'
import Projects from './components/Projects/Projects'
import MoreProjects from './components/MoreProjects/MoreProjects'
import Contact from './components/Contact'
import { Element } from 'react-scroll'
import ReactGa from 'react-ga'
import styled from 'styled-components'
const AppContainer = styled.div`
  background: whitesmoke;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  @media (max-width: 1000px) {
    padding: 0;
  }
`
const Container = styled.div`
  width: 1200px;
  max-width: 1200px;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.2);
  background: white;
`
const Header = lazy(() => import('./components/Header/index'))

function App() {
  useEffect(() => {
    ReactGa.initialize('UA-145732904-1')
    ReactGa.pageview('/')
  }, [])

  return (
    <Suspense
      fallback={'Loading...'}
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AppContainer>
        {/* <div className="appContainer" style={{ background: 'black' }}> */}
        <Container>
          <Header />
          <Element
            name="about"
            className="element"
            style={{ position: 'relative' }}
          >
            <About />
          </Element>
          <Element name="projects" className="element">
            <Projects />
            <MoreProjects />
          </Element>
          <Element name="contact" className="element">
            <Contact />
          </Element>
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
        </Container>
      </AppContainer>
    </Suspense>
  )
}

export default App
