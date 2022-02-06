import React from 'react'
import { RegularWithMargin } from './typographySmallLetter'
import styled from 'styled-components'

export const Container = styled.div`
	height: 100%;
	width: 80%;
	min-width: 300px;
	max-width: 600px;
	display: flex;
	flex-direction: column;
	margin: 70px 60px;
	margin-bottom: 0;
	text-align: justify;

	@media (max-width: 1000px) {
		flex-direction: column;
		width: 100%;
		min-width: auto;
	}

	@media (max-width: 500px) {
		margin-top: 40px;
	}
`

export const Link = styled.a`
	color: #bf6d04;
`
export const About = () => (
	<Container>
		<RegularWithMargin>
			Grew up in Greece, based in Berlin since 2016. Part-time digital nomad.
			Studies in Applied Mathematics, Management and Full Stack Development. My
			professional experience ranges from Online Marketing and Business
			Consulting to Software Engineering. I enjoy creating Websites that work
			well and feel good by using the latest technologies.
		</RegularWithMargin>
		<br />
		<RegularWithMargin>
			Currently working at{' '}
			<Link href='https://artsy.net/' target='_blank' rel='noopener noreferrer'>
				Artsy
			</Link>
			, while building{' '}
			<Link
				href='https://buddies-app.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				Buddies
			</Link>
			, the expat app, on the side.
		</RegularWithMargin>
	</Container>
)
