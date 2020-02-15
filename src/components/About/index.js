import React, {
  // lazy,
  Suspense
} from 'react'
import { Title, AboutMe, Photo, Description } from './elements'
import { Regular } from '../Typography'

const About = () => (
  <Suspense fallback={'Loading...'}>
    <Title>About</Title>
    <AboutMe>
      <Photo></Photo>
      <Description>
        <Regular>
          Full Stack JavaScript Developer based in Berlin. I have studied
          Applied Mathematics and Management, while my Professional Experience
          ranges from Online Marketing and Business Consulting to Software
          Engineering. I like creating Websites that work well and feel good by
          using the latest technologies.
        </Regular>
        <br />
        <Regular>My CV</Regular>
      </Description>
    </AboutMe>
  </Suspense>
)

export default About
