import React from 'react'
import styled from 'styled-components'
const Background = styled.div`
  background: lightgrey;
  height: 300px;
  width: 100%;
  background-size: cover;
`
const NavigationBar = styled.div`
  background: black;
  padding: 0 60px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid white;
  @media (max-width: 768px) {
    padding: 0 30px;
  }
`

const NavItem = styled.div`
  color: white;
  display: flex;
  align-items: center;
`
const Name = styled.div`
  font-size: 2.2em;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`
const MenuItem = styled.a`
  color: white;
  margin: 8px;
  @media (max-width: 768px) {
    display: none;
  }
`

const MenuIcon = styled.a`
  color: white;
  margin: 8px;
  width: 15px;
  height: 15px;
  background-size: contain;
  background-repeat: no-repeat;
`
const GithubIcon = styled(MenuIcon)`
  background-image: url('assets/github.png');
`
const LinkedinIcon = styled(MenuIcon)`
  background-image: url('assets/linkedin.png');
`

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
        <GithubIcon
          class='menuIcon githubIcon'
          href='https://github.com/patrinoua/'
          target='_blank'
        />
        <LinkedinIcon
          class='menuIcon linkedinIcon'
          href='https://www.linkedin.com/in/patrinoua/'
          target='_blank'
        />
        <MenuItem>|</MenuItem>
        <MenuItem>Languages</MenuItem>
      </NavItem>
    </NavigationBar>
  </Background>
)

export default Header
