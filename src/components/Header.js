import React from 'react'
import styled from 'styled-components'
const Background = styled.div`
  background: lightgrey;
  height: 300px;
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  background-image: url('assets/background.jpg');
  text-shadow: 0 4px 5px rgba(0, 0, 0, 0.5);
`

const NavigationBar = styled.div`
  // background: black;
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin: 0 60px;
  @media (max-width: 768px) {
    margin: 0 30px;
  }
`
const NavigationBarLine = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`

const NavItem = styled.div`
  display: flex;
  align-items: center;
`
const Name = styled.div`
  font-size: 2.2em;
  @media (max-width: 768px) {
    font-size: 1.3em;
    font-weight: 600;
  }
`
const Subtitle = styled.h2`
  font-size: 4em;
  font-weight: 300;
  height: 70%;
  width: 300px;
  display: flex;
  align-items: center;
  font-family: 'Quattrocento', 'Helvetica', serif;
  margin-left: 60px;
  @media (max-width: 768px) {
    width: 90%;
    font-size: 3em;
    margin-left: 30px;
  }
`

const MenuItem = styled.a`
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: white;
  margin: 8px;
  @media (max-width: 768px) {
    display: none;
  }
`
const MenuIconContainer = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
`
const GithubContainer = styled(MenuIconContainer)`
  &:hover {
    background: black;
  }
`
const LinkedinContainer = styled(MenuIconContainer)`
  &:hover {
    background: #2f76b0;
  }
`
const MenuIcon = styled.a`
  margin: 2px;
  width: 20px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
`
const GithubIcon = styled(MenuIcon)`
  background-image: url('assets/github.png');
`
const LinkedinIcon = styled(MenuIcon)`
  background-image: url('assets/linkedin.png');
`
const SeparatingLine = styled.div`
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  height: 88px;
  transform: translateY(-4px);
  @media (max-width: 768px) {
    display: none;
  }
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

        <SeparatingLine />
        <MenuItem>Languages</MenuItem>
      </NavItem>
    </NavigationBar>
    <NavigationBarLine />
    <Subtitle>Full Stack Developer</Subtitle>
  </Background>
)

export default Header
