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
import { TitleHide, Regular, RegularWithMargin } from '../typography'

const About = () => (
  <Suspense fallback={'Loading...'}>
    <TitleHide>News</TitleHide>
    <AboutMe>
      {/* <iframe
        title='desktop video'
        src='https://player.vimeo.com/video/494842048'
        width='640'
        height='480'
        frameborder='0'
        allow='autoplay; fullscreen'
        allowfullscreen
      ></iframe> */}

      <Regular>
        I am happy to share with you that <strong>Buddies</strong> has been
        selected to participate in the <strong>Make it lean</strong> contest
        organized by the <strong>startup incubator Berlin</strong>!
        <br />
        <br />
        <strong>Buddies</strong> is a unique, location based, one-on-one, mobile
        application that allows users to interact with each other and make new
        friends based on common interests.
        <br />
        <br />
        You can vote for <strong>Buddies</strong> here: 
        <br />
        <br />
        <a href='https://www.startup-incubator.berlin/make-it-lean-contest-2020/buddies/'>
          www.startup-incubator.berlin/make-it-lean-contest-2020/buddies/
        </a>
        <br />
        <br />
        <br />
        <iframe
          title='desktop video'
          src='https://www.startup-incubator.berlin/make-it-lean-contest-2020/buddies/'
          width='840'
          height='930'
          frameborder='0'
          allow='autoplay; fullscreen'
          allowfullscreen
        ></iframe>
        <br />
        <br />
        Your vote will help a lot and is greatly appreciated!
        <br /> Of course feel free to spread the word! 😊 <br />
        By the way, I'm also looking for{' '}
        <strong> Creative and Technical cofounders</strong>.
        <br />
        <br />
        <hr />
        <br />
        <div style={{ display: 'flex' }}>
          <div style={{ paddingRight: '20px' }}>
            I am also excited to announce that I have been offered a Fellowship
            by Founders Institute Berlin for the Spring Batch of 2021.
          </div>
          <img
            src='assets/The_Founder_Institute_Logo.png'
            style={{ width: '300px' }}
          />
        </div>
        <br /> <hr />
      </Regular>
      <br />
    </AboutMe>
    <TitleHide>About</TitleHide>

    <AboutMe>
      <RegularWithMargin>
        Full Stack JavaScript Mobile and Web Application Developer based in
        Berlin. Studies in Applied Mathematics, Management and Full Stack
        Development. My professional experience ranges from Online Marketing and
        Business Consulting to Software Engineering. I enjoy creating Websites
        that work well and feel good by using the latest technologies.
      </RegularWithMargin>
      <br />
      {/* <RegularHide>
        <a
          href='https://www.dropbox.com/sh/3xwg2e6zvd1gwxv/AACbDtoaAVl6VvX4dqS_dL6Ca?dl=0'
          target='_blank'
          rel='noopener noreferrer'
        >
          My CV
        </a>
      </RegularHide> */}
    </AboutMe>
  </Suspense>
)

export default About
