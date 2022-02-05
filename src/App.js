import React, { Suspense, lazy, useEffect } from 'react'
import './App.css'
import { About } from './components/About'
import { Freetime } from './components/Freetime'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact'
import { Element } from 'react-scroll'
import ReactGa from 'react-ga'
import styled from 'styled-components'

const BigScreenContainer = styled.div`
	background: whitesmoke;
	padding: 20px 0;
	display: flex;
	justify-content: center;
	@media (max-width: 1220px) {
		padding: 0;
	}
`
const Container = styled.div`
	width: 1200px;
	max-width: 1200px;
	box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.2);
	background: white;
`

function App() {
	useEffect(() => {
		ReactGa.initialize('UA-145732904-1')
		ReactGa.pageview('/')
	}, [])

	const Header = lazy(() => import('./components/Header/index'))

	return (
		<Suspense fallback={'Loading...'}>
			<BigScreenContainer>
				<Container>
					<Header />
					<Element name='about' className='element'>
						<About />
					</Element>
					<Element name='projects' className='element'>
						<Projects />
						<Freetime />
					</Element>
					<Element name='contact' className='element'>
						<Contact />
					</Element>
				</Container>
			</BigScreenContainer>
		</Suspense>
	)
}

export default App
