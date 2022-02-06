import React from 'react'
import styled from 'styled-components'
import { RegularCenter } from '../typographySmallLetter'

export const ProjectImage = styled.div`
	width: 600px;
	height: 360px;
	border-radius: 10px 100px / 120px;
	margin: 30px 0;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: contain;
	background-image: ${(props) =>
		`url(./assets/projects/${props.project}.${
			props.project === 'klazaridis' ? 'gif' : 'png'
		})`};
	@media (max-width: 1000px) {
		height: auto;
		min-height: 330px;
		margin: 30px 0;
		max-width: 560px;
		background-attachment: scroll;
		background-image: ${(props) =>
			`url(./assets/projects/${props.project}-mobile.${
				props.project === 'klazaridis' ? 'gif' : 'png'
			})`};
	}
	@media (max-width: 500px) {
		border-radius: 0;
		margin: 0;
		width: 100%;
	}
`

export const VisitWebsite = styled.div`
	opacity: 0;
	width: 50%;
	height: 100%;
	background: rgba(0, 0, 0, 0.7);
	box-sizing: border-box;
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		opacity: 1;
	}
`

export const VisitWebsiteLink = styled.a`
	width: 100%; // xreiazetai, otherwise pic dissapears
`
export const VisitCodeLink = styled.a`
	width: 100%;
	color: black;
`

export const CheckoutCode = styled(VisitCodeLink)`
	background: rgba(256, 256, 256, 0.7);
	color: black;
`
export const CodeIsPrivateMsg = styled.div`
	font-size: 3em;
	font-weight: 600;
	color: #636363;
	text-align: center;
`

export const ProjectText = styled.div`
	width: 100%;
	max-width: 800px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 20px 0;
	@media (max-width: 1000px) {
		height: auto;
		padding-bottom: 130px;
		padding-bottom: 30px;
	}
`
export const ProjectURL = styled.a`
	color: black;
	text-align: center;
	text-decoration: underline;
	font-size: 1.2em;
	margin: 15px;
	@media (max-width: 1000px) {
		margin: 5px;
		font-size: 1.2em;
	}
	@media (max-width: 768px) {
		font-size: 0.8em;
	}
`
export const ProjectOverlay = styled(ProjectImage)`
	top: 0;
	position: absolute;
	display: flex;
	@media (max-width: 768px) {
		display: none;
	}
`

export const ProjectOverlayComponent = ({
	heroku_url,
	codeIsAvailable,
	github_url,
}) => (
	<ProjectOverlay>
		<VisitWebsite>
			<VisitWebsiteLink
				href={heroku_url}
				target='_blank'
				rel='noopener noreferrer'
			>
				Visit Project
			</VisitWebsiteLink>
		</VisitWebsite>
		<CheckoutCode>
			{codeIsAvailable === '1' ? (
				<VisitCodeLink href={github_url} target='_blank'>
					See the Code
				</VisitCodeLink>
			) : (
				<CodeIsPrivateMsg>This code is private</CodeIsPrivateMsg>
			)}
		</CheckoutCode>
	</ProjectOverlay>
)

export const ProjectTextComponent = ({ displayName, description = '' }) => (
	<ProjectText>
		{/* <H2>{displayName}</H2> */}
		<RegularCenter>{description}</RegularCenter>
		{/* {design_tool && (
		<>
			<br />
			<RegularCenter>
				Designed with <t />
				{design_url ? (
					<a
						style={{
							marginLeft: '5px',
							color: 'blue',
							// borderBottom: '1px solid lightgray !important'
						}}
						target='_blank'
						rel='noopener noreferrer'
						href={design_url}
					>
						{' '}
						{design_tool}
					</a>
				) : (
					<p style={{ marginLeft: '5px' }}>{design_tool}</p>
				)}
				.
			</RegularCenter>
		</>
	)} */}
		{/* <br /> */}
		{/* <RegularCenter>{createdWith}.</RegularCenter> */}
	</ProjectText>
)
