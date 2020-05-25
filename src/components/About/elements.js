import styled from 'styled-components'
import { H1, Regular } from '../Typography'

export const AboutMe = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  position: relative;
`
export const AboutMeBox = styled.div`
  width: 50%;
  height: 50%;
  min-width: 300px;
  min-height: 300px;
  max-width: 700px;
  max-height: 700px;
  margin: 0 60px;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 80%;
    min-height: 220px;
    margin: 0;
  }
`
export const Photo = styled.img`
  width: 100%;
`

export const PhotoContainer = styled(AboutMeBox)`
  margin-right: 30px;
  @media (max-width: 1000px) {
    background-size: cover;
    width: 100%;
    min-height: 500px;
    height: 100vh;
  }
`
export const Description = styled.div`
  width: 80%;
  min-width: 300px;
  max-width: 800px;
  max-height: 700px;
  margin: 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  @media (max-width: 1000px) {
    width: 100%;
    min-width: auto;
  }
`
export const RegularWithMargin = styled(Regular)`
  @media (max-width: 1000px) {
    padding: 0 30px;
  }
`
