import styled from 'styled-components'
export const ProjectContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ProjectImage = styled.a`
  height: 55vh;
  max-height: 600px;
  width: 80%;
  max-width: 800px;
  // border: 1px solid lightgrey;
  box-shadow: 1px 1px 1px 1px lightgrey;
  background-repeat: no-repeat;
  // background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  background-image: ${(props) =>
    `url(./assets/projects/${props.project}.${
      props.project == 'klazaridis' ? 'gif' : 'png'
    })`};

  @media (max-width: 1000px) {
    height: 50vh;
    min-height: 280px;
    background-attachment: scroll;
    background-image: ${(props) =>
      `url(./assets/projects/${props.project}-mobile.${
        props.project == 'klazaridis' ? 'gif' : 'png'
      })`};
  }
`
export const ProjectText = styled.div`
  // box-shadow: 1px 1px 18px 20px white;
  height: 40vh;
  width: 100%;
  max-width: 800px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding-bottom: 180px;
  @media (max-width: 1000px) {
    margin-bottom: 80px;
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
