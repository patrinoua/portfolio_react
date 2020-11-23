import React, {
  // lazy,
  Suspense
} from "react"

import { Title, H2, RegularWithMargin, RegularCenter } from "../Typography"
import {
  ProjectContainer,
  ProjectImage,
  ProjectText,
  ProjectOverlay,
  CheckoutCode,
  VisitWebsite,
  VisitWebsiteLink,
  VisitCodeLink,
  CodeIsPrivateMsg
} from "./elements"

const Projects = () => {
  const projects = [
    "5_pingpongbuddies",
    "10_Connect4",
    // '15_Ioanna',
    "20_PinApp",
    "60_klazaridis"
    // '30_Imageboard',
  ]
  const listOfProjects = []

  projects.forEach((project) => {
    const currentProject = require(`./projectsData/${project}/project.json`)
    listOfProjects.push(currentProject)
  })

  return (
    <Suspense fallback={"Loading Projects..."}>
      <Title>Selected Projects</Title>
      {listOfProjects.map(
        ({
          displayName,
          description,
          createdWith,
          heroku_url,
          github_url,
          design_url = "",
          design_tool = "",
          project,
          codeIsAvailable
        }) => (
          <ProjectContainer key={displayName}>
            {console.log("project", project)}
            <ProjectImage
              href={heroku_url}
              target='_blank'
              project={project}
            ></ProjectImage>
            <ProjectOverlay>
              <VisitWebsite>
                <VisitWebsiteLink href={heroku_url} target='_blank'>
                  Visit Project
                </VisitWebsiteLink>
              </VisitWebsite>
              <CheckoutCode>
                {codeIsAvailable === "1" ? (
                  <VisitCodeLink href={github_url} target='_blank'>
                    See the Code
                  </VisitCodeLink>
                ) : (
                  <CodeIsPrivateMsg>This code is private</CodeIsPrivateMsg>
                )}
              </CheckoutCode>
            </ProjectOverlay>
            <ProjectText>
              <H2>{displayName}</H2>
              <RegularCenter>{description}</RegularCenter>
              {design_tool && (
                <>
                  <br />
                  <RegularCenter>
                    Designed with <t />
                    {design_url ? (
                      <a
                        style={{ marginLeft: "5px" }}
                        target='_blank'
                        href={design_url}
                      >
                        {" "}
                        {design_tool}
                      </a>
                    ) : (
                      <p style={{ marginLeft: "5px" }}>{design_tool}</p>
                    )}
                    .
                  </RegularCenter>
                </>
              )}
              <br />
              <RegularCenter>{createdWith}.</RegularCenter>
            </ProjectText>
          </ProjectContainer>
        )
      )}
      <RegularWithMargin>
        In my free time I like to play board games, cook, travel, take{" "}
        <a
          href='https://www.flickr.com/photos/11333811@N08/'
          target='_blank'
          rel='noopener noreferrer'
        >
          pictures
        </a>
        , listen to{" "}
        <a
          href='https://www.last.fm/user/MrsBlackGr'
          target='_blank'
          rel='noopener noreferrer'
        >
          music
        </a>
        ,
        <a
          href='https://www.dropbox.com/sh/dz7wb1inaitoryj/AABZF9fpEA7l85ZX4GlWTfOma?dl=0'
          target='_blank'
          rel='noopener noreferrer'
        >
          draw
        </a>{" "}
        and read{" "}
        <a
          href=' https://www.goodreads.com/user/show/41608895-angeliki'
          target='_blank'
          rel='noopener noreferrer'
        >
          books
        </a>
        !
      </RegularWithMargin>
    </Suspense>
  )
}

export default Projects
