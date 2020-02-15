import React from 'react'
import {
  Title,
  ContactBlock,
  ContactRegular,
  IconsContainer,
  GithubContainer,
  GithubIcon,
  LinkedinContainer,
  LinkedinIcon
} from './elements'

const Contact = () => (
  <ContactBlock>
    <Title>Contact</Title>
    <ContactRegular>patrinoua@gmail.com</ContactRegular>
    <IconsContainer>
      <GithubContainer>
        <GithubIcon
          class='menuIcon githubIcon'
          href='https://github.com/patrinoua/'
          target='_blank'
        />
      </GithubContainer>
      <LinkedinContainer>
        <LinkedinIcon
          class='menuIcon linkedinIcon'
          href='https://www.linkedin.com/in/patrinoua/'
          target='_blank'
        />
      </LinkedinContainer>
    </IconsContainer>
  </ContactBlock>
)

export default Contact
