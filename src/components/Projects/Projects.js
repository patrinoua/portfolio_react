import React from 'react'
import styled from 'styled-components'

import { ProjectImage } from './elements'

export const ProjectContainer = styled.div`
	max-width: 600px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 30px 0;
	position: relative;
	@media (max-width: 500px) {
		width: 100%; // xreiazetai!
		margin: 0px;
	}
`

export const VisitWebsiteLink = styled.a`
	width: 100%; // xreiazetai, otherwise pic dissapears
`
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
			{listOfProjects.map(({ displayName, heroku_url, project }) => (
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
			))}
		</>
	)
}
