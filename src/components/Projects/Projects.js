import React from 'react'
import { RegularCenter } from '../typographySmallLetter'
import {
	ProjectContainer,
	ProjectImage,
	ProjectText,
	ProjectOverlay,
	CheckoutCode,
	VisitWebsite,
	VisitWebsiteLink,
	VisitCodeLink,
	CodeIsPrivateMsg,
} from './elements'

export const Projects = () => {
	const projects = [
		'1_buddies',
		// '5_pingpongbuddies',
		// '10_Connect4',
		// '15_Ioanna',
		// '20_PinApp',
		// '60_klazaridis',
		// '30_Imageboard',
	]
	const listOfProjects = []

	projects.forEach((project) => {
		const currentProject = require(`./projectsData/${project}/project.json`)
		listOfProjects.push(currentProject)
	})

	return (
		<>
			{listOfProjects.map(
				({
					displayName,
					description,
					createdWith,
					heroku_url,
					github_url,
					design_url = '',
					design_tool = '',
					project,
					codeIsAvailable,
				}) => (
					<ProjectContainer key={displayName}>
						<VisitWebsiteLink
							href={heroku_url}
							target='_blank'
							rel='noopener noreferrer'
						>
							<ProjectImage project={project}></ProjectImage>
						</VisitWebsiteLink>
						{/* <ProjectOverlayComponent /> */}
						{/* <ProjectTextComponent description={description} /> */}
					</ProjectContainer>
				)
			)}
		</>
	)
}

const ProjectOverlayComponent = ({
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

const ProjectTextComponent = ({ displayName, description = '' }) => (
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
