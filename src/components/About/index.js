import React, {
  // lazy,
  Suspense,
} from 'react'
import {
  AboutMe,
  // Photo,
  // PhotoContainer,
  // PhotoContainer1,
  Description,
} from './elements'
import { TitleHide, RegularWithMargin, RegularHide } from '../typography'

const About = () => (
  <Suspense fallback={'Loading...'}>
    <TitleHide>About</TitleHide>
    <AboutMe>
      {/* <PhotoContainer>
        <Photo src="assets/angeliki-mik-1.png" />
      </PhotoContainer>
       */}
      {/* <PhotoContainer1>
        <Photo />
      </PhotoContainer1> */}

      <Description>
        <RegularWithMargin>
          Full Stack JavaScript Mobile and Web Application Developer based in
          Berlin. Studies in Applied Mathematics, Management and Full Stack
          Development. My professional experience ranges from Online Marketing
          and Business Consulting to Software Engineering. I enjoy creating
          Websites that work well and feel good by using the latest
          technologies.
        </RegularWithMargin>
        <br />
        <RegularHide>
          <a
            href='https://www.dropbox.com/sh/3xwg2e6zvd1gwxv/AACbDtoaAVl6VvX4dqS_dL6Ca?dl=0'
            target='_blank'
            rel='noopener noreferrer'
          >
            My CV
          </a>
        </RegularHide>
      </Description>
    </AboutMe>
  </Suspense>
)

export default About
