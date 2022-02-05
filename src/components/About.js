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
	align-items: center;
	text-align: justify;

	@media (max-width: 1000px) {
		flex-direction: column;
		width: 100%;
		min-width: auto;
	}
	@media (max-width: 500px) {
		margin-top: 40px;
	}
	position: relative;
`

export const About = () => (
	<Container>
		<RegularWithMargin>
			Grew up in Greece, based in Berlin. Part-time digital nomad. Studies in
			Applied Mathematics, Management and Full Stack Development. My
			professional experience ranges from Online Marketing and Business
			Consulting to Software Engineering. I enjoy creating Websites that work
			well and feel good by using the latest technologies.
		</RegularWithMargin>
	</Container>
)
