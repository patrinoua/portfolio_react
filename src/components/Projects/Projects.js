import React, {
  // lazy,
  Suspense,
} from 'react'

import { Title, H2, RegularCenter } from '../Typography'
import {
  ProjectContainer,
  ProjectImage,
  ProjectText,
  ProjectURL,
} from './elements'

var fs = require('fs')

const Projects = () => {
  const projects = [
    '60_klazaridis',
    '10_Connect4',
    // '15_Ioanna',
    '20_PinApp',
    // '30_Imageboard',
  ]
  const listOfProjects = []
  {
    projects.forEach((project) => {
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
          project,
        }) => (
          <ProjectContainer>
            <ProjectImage
              href={heroku_url}
              target="_blank"
              project={project}
            ></ProjectImage>
            <ProjectText>
              <H2>{displayName}</H2>
              <RegularCenter>{description}</RegularCenter>
              {/*  <br />
             <RegularCenter>{tryMsg}</RegularCenter>
              <ProjectURL href={heroku_url} target="_blank">
                {heroku_url}
              </ProjectURL> 
              <br />
              <RegularCenter>{codeMsg}</RegularCenter>
              <ProjectURL href={github_url} target="_blank">
                {github_url}
              </ProjectURL> */}
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
