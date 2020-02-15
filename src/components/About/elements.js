import styled from 'styled-components'
import { H1 } from '../Typography'

export const Title = styled(H1)`
  @media (max-width: 768px) {
    display: none;
  }
`
export const AboutMe = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const AboutMeBox = styled.div`
  width: 40%;
  height: 40%;
  min-width: 300px;
  min-height: 300px;
  max-width: 700px;
  max-height: 700px;
  margin: 0 20px;
`
export const Photo = styled(AboutMeBox)`
  background: url('assets/angeliki-mik.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`
export const Description = styled(AboutMeBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
