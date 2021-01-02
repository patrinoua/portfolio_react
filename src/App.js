import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

import MoreProjects from './components/MoreProjects/MoreProjects'

import ReactGa from 'react-ga'
import styled from 'styled-components'
import Home from './Home'
const AppContainer = styled.div`
  background: whitesmoke;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  @media (max-width: 1000px) {
    padding: 0;
  }
`
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
        <BrowserRouter>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/moreProjects' render={() => <MoreProjects />} />
        </BrowserRouter>
      </AppContainer>
    </Suspense>
  )
}

export default App
