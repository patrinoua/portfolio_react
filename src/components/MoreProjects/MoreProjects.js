import React, {
  // lazy,
  Suspense,
  useState,
} from 'react'

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
  MoreProjectsButton,
} from './elements'

var fs = require('fs')

const MoreProjects = () => {
  const projects = ['15_Ioanna', '30_Imageboard', '40_Spotify', '70_todo']
  const listOfProjects = []
  {
    projects.forEach((project) => {
      const currentProject = require(`../Projects/projectsData/${project}/project.json`)
      listOfProjects.push(currentProject)
    })
  }
  const [projectsAreVisible, showProjects] = useState(false)
  return (
    <Suspense fallback={'Loading Projects...'}>
      <MoreProjectsContainer>
        <MoreProjectsButton onClick={() => showProjects(!projectsAreVisible)}>
          More Projects
        </MoreProjectsButton>
        {projectsAreVisible && (
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
                    <ProjectTechnologies>{techUsed}</ProjectTechnologies>
                    <LinksContainer>
                      <VisitWebsite>
                        <VisitWebsiteLink href={heroku_url} target="_blank">
                          Project
                        </VisitWebsiteLink>
                      </VisitWebsite>
                      <CheckoutCode>
                        {codeIsAvailable === '1' ? (
                          <VisitCodeLink href={github_url} target="_blank">
                            Code
                          </VisitCodeLink>
                        ) : (
                          <CodeIsPrivateMsg>Code is private</CodeIsPrivateMsg>
                        )}
                      </CheckoutCode>
                    </LinksContainer>
                  </ProjectOverlay>
                  {/* <ProjectText>
              <H2>{displayName}</H2>
              <RegularCenter>{description}</RegularCenter>
              <br />
              <RegularCenter>{createdWith}</RegularCenter>
            </ProjectText> */}
                </ProjectContainer>
              )
            )}
          </ProjectsContainer>
        )}
      </MoreProjectsContainer>
    </Suspense>
  )
}

export default MoreProjects
