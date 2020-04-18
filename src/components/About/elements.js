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
  // height: 80%;
  min-width: 300px;
  // min-height: 300px;
  text-align: justify;
  max-width: 800px;
  max-height: 700px;
  margin: 0 60px;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 80%;
    min-height: 220px;
    margin: 0;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  // margin-left: 30px;
  @media (max-width: 1000px) {
    margin: 0 40px;
  }
`
export const RegularWithMargin = styled(Regular)`
  @media (max-width: 1000px) {
    margin-top: 40px;
    margin-left: 20px;
    margin-right: 20px;
  }
`
