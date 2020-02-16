import styled from 'styled-components'
import { H1, Regular } from '../Typography'

export const AboutMe = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const AboutMeBox = styled.div`
  width: 50%;
  height: 50%;
  min-width: 300px;
  min-height: 300px;
  max-width: 700px;
  max-height: 700px;
  margin: 0 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const Photo = styled(AboutMeBox)`
  background: url('assets/angeliki-mik.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 768px) {
    margin-top: 50px;
    background-size: cover;
    width: 100%;
    height: 500px;
  }
`
export const Description = styled(AboutMeBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  margin: 0 20px;
  @media (max-width: 768px) {
    margin: 0 40px;
  }
`
export const RegularWithMargin = styled(Regular)`
  @media (max-width: 768px) {
    margin-top: 40px;
    margin-left: 20px;
    margin-right: 20px;
  }
`
