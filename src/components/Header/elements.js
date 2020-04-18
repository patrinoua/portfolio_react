import styled from 'styled-components'
import { Link, animateScroll as scroll } from 'react-scroll'

export const Background = styled.div`
  width: 100%;
  background-size: cover;
  background-position: fixed;
  display: flex;
  flex-direction: column;
  color: white;
  background-image: url('assets/angeliki-mik-1.png');
  background-position: top;
  text-shadow: -3px 2px 4px rgba(0, 0, 0, 0.8);
  @media (max-width: 1000px) {
    height: 100vh;
    background-attachment: fixed;
    background-position: top;
  }
`

export const NavigationBar = styled.div`
  // background: black;
  // height: 100px;
  display: flex;
  justify-content: flex-end;
  // margin: 0 60px;
  background: linear-gradient(to bottom, black, transparent);
  height: 15vh;
  max-height: 130px;
  @media (max-width: 768px) {
    margin: 0 5vw;
    height: 20vh;
  }
`

export const NavigationBarLine = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`

export const NavItem = styled.div`
  display: flex;
  align-items: center;
`
export const Name = styled.div`
  font-size: 2.2em;
  display: flex;
  align-items: center;
  font-weight: 500;
  @media (max-width: 1000px) {
    font-size: 3em;
    line-height: 1.6;
  }
  @media (max-width: 768px) {
    font-size: 1.6em;
    font-weight: 500;
  }
`
export const Subtitle = styled.h2`
  font-size: 4em;
  font-weight: 300;
  height: 40vh;
  width: 300px;
  display: flex;
  align-items: center;
  font-family: 'Quattrocento', 'Helvetica', serif;
  margin-left: 60px;
  @media (max-width: 1000px) {
    font-size: 7em;
    line-height: 1.6;
  }
  @media (max-width: 768px) {
    width: 90%;
    font-size: 3em;
    margin-left: 5vw;
    height: 80vh;
  }
`

export const MenuItem = styled(Link)`
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: rgba(255, 255, 255, 0.8);
  margin: 8px;
  font-weight: 500;
  @media (max-width: 1000px) {
    // font-size: 2em;
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`
export const MenuIconContainer = styled.div`
  width: 25px;
  height: 25px;
  margin: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  @media (max-width: 1000px) {
    width: 50px;
    height: 50px;
    margin: 15px;
  }
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin: 0px;
  }
`
export const GithubContainer = styled(MenuIconContainer)`
  &:hover {
    background: #999;
  }
`
export const LinkedinContainer = styled(MenuIconContainer)`
  margin-left: 0;
  &:hover {
    background: #2f76b0;
  }
`
export const MenuIcon = styled.a`
  margin: 2px;
  width: 16px;
  height: 16px;
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 1000px) {
    width: 40px;
    height: 40px;
    margin: 5px;
  }
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 5px;
  }
`
export const GithubIcon = styled(MenuIcon)`
  background-image: url('assets/github.png');
`
export const LinkedinIcon = styled(MenuIcon)`
  background-image: url('assets/linkedin.png');
  margin-right: 50px;
`
export const SeparatingLine = styled.div`
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  height: 88px;
  transform: translateY(-4px);
  @media (max-width: 768px) {
    display: none;
  }
`
