import React from 'react'
import { RegularWithMargin } from './typographySmallLetter'
import styled from 'styled-components'

const Link = styled.a`
	color: #bf6d04;
`
export const Container = styled.div`
	height: 100%;
	width: 80%;
	min-width: 300px;
	max-width: 600px;
	display: flex;
	flex-direction: column;
	margin: 0px 60px 60px 60px;
	align-items: center;
	text-align: justify;
	@media (max-width: 1000px) {
		flex-direction: column;
		width: 100%;
		min-width: auto;
	}
	position: relative;
`
export const Freetime = () => (
	<Container>
		<RegularWithMargin>
			In my free time, I enjoy to{' '}
			<Link href='https://cmoreira.net/visited-countries-map/?vcstitle=&inacolor=%23e0e0e0&actcolor=%236699cc&vcscountries=TR,AT,BE,HR,CZ,EE,FR,DE,GR,HU,IT,LV,NL,NO,PT,RU,RS,SI,ES,GB,US'>
				travel
			</Link>
			,{' '}
			<Link
				href='https://www.flickr.com/photos/11333811@N08/'
				target='_blank'
				rel='noopener noreferrer'
			>
				take pictures
			</Link>
			,{' '}
			<Link
				href='https://www.last.fm/user/MrsBlackGr'
				target='_blank'
				rel='noopener noreferrer'
			>
				listen to music
			</Link>
			,{' '}
			<Link
				href='https://www.dropbox.com/sh/dz7wb1inaitoryj/AABZF9fpEA7l85ZX4GlWTfOma?dl=0'
				target='_blank'
				rel='noopener noreferrer'
			>
				draw
			</Link>{' '}
			<Link
				href=' https://www.goodreads.com/user/show/41608895-angeliki'
				target='_blank'
				rel='noopener noreferrer'
			>
				read books
			</Link>{' '}
			and share{' '}
			<Link
				href='https://work-in-tech.web.app'
				target='_blank'
				rel='noopener noreferrer'
			>
				tech tips.
			</Link>
		</RegularWithMargin>
	</Container>
)
