import React, {
  // lazy,
  Suspense,
} from 'react'
import {
  AboutMe,
  Photo,
  // PhotoContainer,
  PhotoContainer1,
  RegularWithMargin,
  Description,
} from './elements'
import {
  TitleHide,
  // RegularHide
} from '../Typography'

const About = () => (
  <Suspense fallback={'Loading...'}>
    <TitleHide>About</TitleHide>
    <AboutMe>
      {/* <PhotoContainer>
        <Photo src="assets/angeliki-mik-1.png" />
      </PhotoContainer>
       */}
      <PhotoContainer1>
        <Photo
        //  src="assets/angeliki-mik-1.png"
        />
      </PhotoContainer1>

      <Description>
        <RegularWithMargin>
          Full Stack JavaScript Developer based in Berlin with studies in
          Applied Mathematics, Management and Full Stack Development. My
          professional experience ranges from Online Marketing and Business
          Consulting to Software Engineering. I enjoy creating Websites that
          work well and feel good by using the latest technologies.
        </RegularWithMargin>
        <br />
        {/* <RegularHide>My CV</RegularHide> */}
      </Description>
    </AboutMe>
  </Suspense>
)

export default About
