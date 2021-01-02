import styled from 'styled-components'
export const MoreProjectsContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ProjectsContainer = styled.div`
  width: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  position: relative;
`

export const ProjectImage = styled.div`
  height: 500px;
  width: 500px;
  background-image: ${(props) => `url(./assets/projects/${props.project}.png)`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  @media (max-width: 550px) {
    max-width: 90vw;
    max-height: 90vw;
  }
`

export const ProjectOverlay = styled(ProjectImage)`
  opacity: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  &:hover {
    opacity: 1;
  }
`

export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const VisitWebsite = styled.div`
  width: 45%;
  height: 50px;
  background: rgba(0, 0, 0, 0.7);
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
`

export const VisitWebsiteLink = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // font-size: 3em;
  font-weight: 600;
  color: white;
`
export const VisitCodeLink = styled(VisitWebsiteLink)``
export const CodeIsPrivateMsg = styled.div`
  // font-size: 3em;
  font-weight: 600;
  color: #636363;
  text-align: center;
`

export const CheckoutCode = styled(VisitWebsite)``

export const ProjectText = styled.div`
  height: 40px;
  text-align: center;
  display: flex;
  align-items: center;
`
export const ProjectTechnologies = styled(ProjectText)``
