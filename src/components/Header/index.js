import React from 'react'
import {
  Background,
  NavigationBar,
  NavItem,
  Name,
  MenuItem,
  GithubContainer,
  GithubIcon,
  LinkedinContainer,
  LinkedinIcon,
  SeparatingLine,
  NavigationBarLine,
  Subtitle
} from './elements'
const Header = () => (
  <Background>
    <NavigationBar>
      <NavItem>
        <Name>Angeliki Patrinou</Name>
      </NavItem>
      <NavItem>
        <MenuItem href='#aboutMeSection'>About</MenuItem>
        <MenuItem href='#projectsBlock'>Work</MenuItem>
        <MenuItem href='#contactBlock'>Contact</MenuItem>
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
        {/* <SeparatingLine />
        <MenuItem>Languages</MenuItem> */}
      </NavItem>
    </NavigationBar>
    <NavigationBarLine />
    <Subtitle>Full Stack Developer</Subtitle>
  </Background>
)

export default Header
