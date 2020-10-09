import styled from 'styled-components'
export const ProjectContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const ProjectImage = styled.div`
  height: 65vh;
  max-height: 600px;
  width: 100%;
  max-width: 800px;
  // border: 1px solid lightgrey;
  box-shadow: 1px 1px 1px 1px lightgrey;
  background-repeat: no-repeat;
  // background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  background-image: ${(props) =>
    `url(./assets/projects/${props.project}.${
      props.project === 'klazaridis' ? 'gif' : 'png'
    })`};

  @media (max-width: 1000px) {
    margin-bottom: 30px;
    height: 50vh;
    min-height: 280px;
    width: 100%;
    background-attachment: scroll;
    background-image: ${(props) =>
      `url(./assets/projects/${props.project}-mobile.${
        props.project === 'klazaridis' ? 'gif' : 'png'
      })`};
  }
`

export const ProjectOverlay = styled(ProjectImage)`
  top: 0;
  // background: gray;
  position: absolute;
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`
export const VisitWebsite = styled.div`
  opacity: 0;
  width: 50%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 1;
  }
`

export const VisitWebsiteLink = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  font-weight: 600;
  color: white;
`
export const VisitCodeLink = styled(VisitWebsiteLink)`
  color: black;
`
export const CodeIsPrivateMsg = styled.div`
  font-size: 3em;
  font-weight: 600;
  color: #636363;
  text-align: center;
`

export const CheckoutCode = styled(VisitWebsite)`
  background: rgba(256, 256, 256, 0.7);
  color: black;
`

export const ProjectText = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 180px;
  @media (max-width: 1000px) {
    height: auto;
    padding-bottom: 130px;
  }
`
export const ProjectURL = styled.a`
  color: black;
  text-align: center;
  text-decoration: underline;
  font-size: 1.2em;
  margin: 15px;
  @media (max-width: 1000px) {
    margin: 5px;
    font-size: 1.2em;
  }
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`
