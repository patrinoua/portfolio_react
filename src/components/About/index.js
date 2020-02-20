import React, {
  // lazy,
  Suspense
} from 'react'
import { AboutMe, Photo, RegularWithMargin, Description } from './elements'
import { TitleHide, RegularHide } from '../Typography'

const About = () => (
  <Suspense fallback={'Loading...'}>
    <TitleHide>About</TitleHide>
    <AboutMe>
      <Photo></Photo>
      <Description>
        <RegularWithMargin>
          Full Stack JavaScript Developer based in Berlin. I have studied
          Applied Mathematics and Management, while my Professional Experience
          ranges from Online Marketing and Business Consulting to Software
          Engineering. I like creating Websites that work well and feel good by
          using the latest technologies.
        </RegularWithMargin>
        <br />
        {/* <RegularHide>My CV</RegularHide> */}
      </Description>
    </AboutMe>
  </Suspense>
)

export default About
