import React, {
  // lazy,
  Suspense
} from 'react'

import { Title, H2, RegularCenter } from '../Typography'
import { ProjectContainer, ProjectImage, ProjectText } from './elements'

var fs = require('fs')

const Projects = () => {
  const projects = [
    '10_Connect4',
    '20_PinApp',
    '30_Imageboard',
    '60_klazaridis'
  ]
  const listOfProjects = []
  {
    projects.forEach(project => {
      const currentProject = require(`./projectsData/${project}/project.json`)
      listOfProjects.push(currentProject)
    })
  }

  return (
    <Suspense fallback={'Loading Projects...'}>
      <Title>Projects</Title>
      {listOfProjects.map(
        ({
          displayName,
          description,
          tryMsg,
          codeMsg,
          createdWith,
          heroku_url,
          github_url,
          project
        }) => (
          <ProjectContainer>
            <H2>{displayName}</H2>
            <ProjectImage
              href={heroku_url}
              target='_blank'
              style={{
                backgroundImage: `url(./assets/projects/${project}.png)`
              }}
            ></ProjectImage>
            <ProjectText>
              <RegularCenter>{description}</RegularCenter>
              <br />
              <RegularCenter>{tryMsg}</RegularCenter>
              <RegularCenter>
                <a href={heroku_url} target='_blank'>
                  {heroku_url}
                </a>
              </RegularCenter>
              <br />
              <RegularCenter>{codeMsg} </RegularCenter>
              <RegularCenter>
                <a href={github_url} target='_blank'>
                  {github_url}
                </a>
              </RegularCenter>
              <br />
              <RegularCenter>{createdWith}</RegularCenter>
            </ProjectText>
          </ProjectContainer>
        )
      )}
    </Suspense>
  )
}

export default Projects
