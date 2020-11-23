import React from 'react'
import {
  Title,
  ContactBlock,
  ContactRegular,
  IconsContainer,
  GithubContainer,
  GithubIcon,
  LinkedinContainer,
  LinkedinIcon,
  Footer
} from './elements'

const Contact = () => (
  <ContactBlock>
    <div
      style={{
        minHeight: '400px',
        backgroundImage: 'linear-gradient(to top,black,rgba(0,0,0,0.3))',
        width: '100%',
        height: '100%',
        position: 'absolute'
      }}
    ></div>
    <div
      style={{
        minHeight: '400px',
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Title>Contact</Title>
      <ContactRegular>patrinoua@gmail.com</ContactRegular>
      <IconsContainer>
        <GithubContainer>
          <GithubIcon
            href='https://github.com/patrinoua/'
            target='_blank'
            className='no-underline'
          />
        </GithubContainer>
        <LinkedinContainer>
          <LinkedinIcon
            href='https://www.linkedin.com/in/patrinoua/'
            target='_blank'
            className='no-underline'
          />
        </LinkedinContainer>
      </IconsContainer>
      <div
        style={{
          position: 'absolute',
          bottom: '-6%',
          marginBottom: '45px',
          color: 'white'
        }}
      >
        <Footer>© 2020 Angeliki Patrinou</Footer>
      </div>
    </div>
  </ContactBlock>
)

export default Contact
