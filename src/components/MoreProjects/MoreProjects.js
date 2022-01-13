import React from 'react'
import {
  MoreProjectsContainer,
  ProjectsContainer,
  ProjectImage,
  ProjectText,
  ProjectOverlay,
  CheckoutCode,
  VisitWebsite,
  VisitWebsiteLink,
  VisitCodeLink,
  CodeIsPrivateMsg,
  ProjectContainer,
  LinksContainer,
  ProjectTechnologies,
} from './elements'

import { H1 } from '../typography'
const MoreProjects = () => {
  const projects = [
    '90_mcMakler',
    '80_doctolib',
    '70_todo',
    '15_Ioanna',
    '30_Imageboard',
    '40_Spotify',
  ]
  const listOfProjects = []

  projects.forEach((project) => {
    const currentProject = require(`../Projects/projectsData/${project}/project.json`)
    listOfProjects.push(currentProject)
  })

  return (
    <MoreProjectsContainer>
      <H1>More Projects</H1>
      <ProjectsContainer>
        {listOfProjects.map(
          ({
            displayName,
            description,
            createdWith,
            techUsed,
            heroku_url,
            github_url,
            project,
            codeIsAvailable,
          }) => (
            <ProjectContainer>
              <ProjectImage project={project}></ProjectImage>
              <ProjectOverlay>
                <h2>{displayName}</h2>
                <ProjectText>{description}</ProjectText>
                <ProjectTechnologies>{createdWith}</ProjectTechnologies>
                <ProjectTechnologies>{techUsed}</ProjectTechnologies>
                <LinksContainer>
                  <VisitWebsite>
                    <VisitWebsiteLink
                      href={heroku_url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Project
                    </VisitWebsiteLink>
                  </VisitWebsite>
                  <CheckoutCode>
                    {codeIsAvailable === '1' ? (
                      <VisitCodeLink
                        href={github_url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Code
                      </VisitCodeLink>
                    ) : (
                      <CodeIsPrivateMsg>Code is private</CodeIsPrivateMsg>
                    )}
                  </CheckoutCode>
                </LinksContainer>
              </ProjectOverlay>
            </ProjectContainer>
          )
        )}
      </ProjectsContainer>
    </MoreProjectsContainer>
  )
}

export default MoreProjects
