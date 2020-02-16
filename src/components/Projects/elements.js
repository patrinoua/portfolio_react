import styled from 'styled-components'

export const ProjectImage = styled.a`
  height: 80vh;
  width: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: contain;
  @media (max-width: 768px) {
    height: 50vh;
    min-height: 280px;
    background-attachment: scroll;
  }
`
export const ProjectText = styled.div`
  width: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 50px;
  @media (max-width: 768px) {
    margin: 20px;
  }
  // box-shadow: 1px 1px 18px 13px white;
`
export const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
