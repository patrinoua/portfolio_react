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
  width: 100%;
  max-width: 900px;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
`
export const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`

export const ProjectImage = styled.div`
  height: 230px;
  width: 230px;
  background-image: ${(props) =>
    `url(./assets/projects/${props.project}.${
      props.project === 'klazaridis' ? 'gif' : 'png'
    })`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  box-shadow: 1px 1px 1px 1px lightgrey;
`

export const MoreProjectsButton = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
  font-family: 'Quicksand', 'Arial Light', sans-serif;
  font-weight: 500;
  font-size: 2.5em;
  color: #2a2a2a;
  text-align: center;
  background: rgba(0, 0, 0, 0.03);
  padding: 10px;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.06);
  }
  @media (max-width: 768px) {
    width: 200px;

    font-size: 1.4em;
    margin: 0;
  }
`

export const ProjectOverlay = styled.div`
  opacity: 0;
  width: 270px;
  height: 270px;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  // justify-self: center;
  // // display: flex;
  // @media (max-width: 768px) {
  //   display: none;
  // }
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
