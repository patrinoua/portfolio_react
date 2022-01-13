import React from 'react'
import {
  Title,
  ContactBlock,
  Overlay,
  IconsContainer,
  GithubContainer,
  GithubIcon,
  LinkedinContainer,
  LinkedinIcon,
  Footer,
} from './elements'

export const Contact = () => (
  <ContactBlock>
    <Overlay />
    <div
      style={{
        minHeight: '400px',
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Title>Get in touch</Title>
      <IconsContainer>
        <LinkedinContainer>
          <LinkedinIcon
            href='https://www.linkedin.com/in/patrinoua/'
            target='_blank'
            className='no-underline'
          />
        </LinkedinContainer>
        <GithubContainer>
          <GithubIcon
            href='https://github.com/patrinoua/'
            target='_blank'
            className='no-underline'
          />
        </GithubContainer>
      </IconsContainer>
      <div
        style={{
          position: 'absolute',
          bottom: '-6%',
          marginBottom: '70px',
          color: 'white',
        }}
      >
        <Footer>© {new Date().getFullYear()} Angela Patrinou</Footer>
      </div>
    </div>
  </ContactBlock>
)
