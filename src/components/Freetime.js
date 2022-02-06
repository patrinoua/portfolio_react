import React from 'react'
import styled from 'styled-components'
import { RegularWithMargin } from './typographySmallLetter'
import { Link, Container } from './About'

export const StyledContainer = styled(Container)`
	margin: 0px 60px 60px 60px;
	@media (max-width: 500px) {
		margin-top: 0;
		margin-bottom: 40px;
	}
`

export const Freetime = () => (
	<StyledContainer>
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
			</Link>
			,{' '}
			<Link
				href=' https://www.goodreads.com/user/show/41608895-angeliki'
				target='_blank'
				rel='noopener noreferrer'
			>
				read books
			</Link>{' '}
			and share{' '}
			<Link
				href='https://work-in-tech.org'
				target='_blank'
				rel='noopener noreferrer'
			>
				tech tips
			</Link>
			.
		</RegularWithMargin>
	</StyledContainer>
)
