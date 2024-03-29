import React from 'react'
import { H1 } from './typographySmallLetter'
import styled from 'styled-components'

export const ContactBlock = styled.div`
	width: 100%;
	min-height: 400px;
	position: relative;
	background-image: url(assets/background.jpg);
	background-position: bottom;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	text-shadow: -3px 2px 4px rgba(0, 0, 0, 0.8);
`
export const Overlay = styled.div`
	min-height: 400px;
	background-image: linear-gradient(to top, black, rgba(0, 0, 0, 0.3));
	width: 100%;
	height: 100%;
	position: absolute;
`
const Contents = styled.div`
	min-height: 400px;
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 1;
	display: flex;
	align-items: center;
	flex-direction: column;
`
export const Title = styled(H1)`
	@media (max-width: 1000px) {
		font-size: 2em;
	}
`
export const IconsContainer = styled.div`
	width: 100%;
	margin: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const MenuIconContainer = styled.div`
	width: 80px;
	height: 80px;
	margin: 10px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3px;
	@media (max-width: 1000px) {
		width: 40px;
		height: 40px;
		margin: 5px;
	}
`
export const GithubContainer = styled(MenuIconContainer)`
	&:hover {
		background: #999;
	}
`
export const LinkedinContainer = styled(MenuIconContainer)`
	&:hover {
		background: #2f76b0;
	}
`
export const MenuIcon = styled.a`
	margin: 2px;
	width: 60px;
	height: 60px;
	background-size: contain;
	background-repeat: no-repeat;
	@media (max-width: 1000px) {
		width: 30px;
		height: 30px;
	}
`
export const GithubIcon = styled(MenuIcon)`
	background-image: url('assets/github.png');
`
export const LinkedinIcon = styled(MenuIcon)`
	background-image: url('assets/linked-in.png');
`
export const Footer = styled.div`
	color: rgba(256, 256, 256, 0.9);
	font-weight: 600;
	font-size: 1.2em;
	letter-spacing: 1.2px;
	@media (max-width: 1000px) {
		font-size: 1em;
	}
`
const Block = styled.div`
	height: 30%;
	margin: 10px;
	display: flex;
	align-items: center;
`
export const Contact = () => (
	<ContactBlock>
		<Overlay />
		<Contents>
			<Block>{/* <Title>Get in touch</Title> */}</Block>
			<Block style={{ height: '20%' }}>
				<IconsContainer>
					<LinkedinContainer>
						<LinkedinIcon
							href='https://www.linkedin.com/in/patrinoua/'
							target='_blank'
							className='no-underline'
						/>
					</LinkedinContainer>
					<GithubContainer>
						<GithubIcon
							href='https://github.com/patrinoua/'
							target='_blank'
							className='no-underline'
						/>
					</GithubContainer>
				</IconsContainer>
			</Block>
			<Block style={{ height: '30%' }}>
				<Footer>© {new Date().getFullYear()} Angela Patrinou</Footer>
			</Block>
		</Contents>
	</ContactBlock>
)
