import React from 'react'
import styled from 'styled-components'
const Background = styled.div`
  background: lightgrey;
  height: 300px;
  width: 100%;
`
const NavigationBar = styled.div`
  background: black;
  padding: 0 60px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid white;
`

const NavItem = styled.div`
  color: white;
  display: flex;
  align-items: center;
`
const Name = styled.div`
  font-size: 2.2em;
  font-weight: 600;
`
const MenuItem = styled.a`
  color: white;
  margin: 8px;
`

const MenuIcon = styled(MenuItem)`
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
  <>
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
    heeeader
  </>
)

export default Header
