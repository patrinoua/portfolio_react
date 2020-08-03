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
  // SeparatingLine,
  // NavigationBarLine,
  Subtitle,
  ElementsContainer,
  TopShadow,
} from './elements'
const Header = () => (
  <Background>
    <TopShadow />
    <ElementsContainer>
      <NavigationBar>
        <NavItem>
          <Name>Angeliki Patrinou</Name>
        </NavItem>
        <NavItem>
          <MenuItem to='about' spy={true} smooth={true} duration={500}>
            About
          </MenuItem>
          <MenuItem to='projects' spy={true} smooth={true} duration={800}>
            Work
          </MenuItem>
          <MenuItem to='contact' spy={true} smooth={true} duration={1000}>
            Contact
          </MenuItem>
          <GithubContainer>
            <GithubIcon href='https://github.com/patrinoua/' target='_blank' />
          </GithubContainer>
          <LinkedinContainer>
            <LinkedinIcon
              href='https://www.linkedin.com/in/patrinoua/'
              target='_blank'
            />
          </LinkedinContainer>
          {/* <SeparatingLine />
<MenuItem>Languages</MenuItem> */}
        </NavItem>
      </NavigationBar>
      {/* <NavigationBarLine /> */}
      <Subtitle>Mobile & Web App Developer</Subtitle>
    </ElementsContainer>
    {/* <Subtitle>Angeliki Patrinou</Subtitle> */}
  </Background>
)

export default Header
