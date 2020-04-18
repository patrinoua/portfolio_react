import React, {
  // lazy,
  Suspense,
} from 'react'
import {
  AboutMe,
  Photo,
  PhotoContainer,
  RegularWithMargin,
  Description,
} from './elements'
import { TitleHide, RegularHide } from '../Typography'

const About = () => (
  <Suspense fallback={'Loading...'}>
    <TitleHide>About</TitleHide>
    <AboutMe>
      {/* <PhotoContainer>
        <Photo src="assets/angeliki-mik-1.png" />
      </PhotoContainer> */}
      <Description>
        <RegularWithMargin>
          Full Stack JavaScript Developer based in Berlin with studies in
          Applied Mathematics, Management and Full Stack Development. Her
          professional experience ranges from Online Marketing and Business
          Consulting to Software Engineering. She enjoys creating Websites that
          work well and feel good by using the latest technologies.
        </RegularWithMargin>
        <br />
        {/* <RegularHide>My CV</RegularHide> */}
      </Description>
    </AboutMe>
  </Suspense>
)

export default About
