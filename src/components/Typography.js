import styled from 'styled-components'

export const H1 = styled.h1`
  margin: 50px;
  font-family: 'Quicksand', 'Arial Light', sans-serif;
  font-weight: 500;
  font-size: 2.8em;
  @media (max-width: 1000px) {
    font-size: 4em;
  }
  @media (max-width: 768px) {
    font-size: 3em;
  }
`
export const Title = styled(H1)`
  margin: 100px 0;
`
export const TitleHide = styled(Title)`
  @media (max-width: 1000px) {
    // display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`
export const H2 = styled.h2`
  margin-top: 50px;
  margin-bottom: 50px;
  font-family: 'Quicksand', 'Arial Light', sans-serif;
  font-weight: 500;
  font-size: 2.5em;
  color: #2a2a2a;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 2.5em;
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    font-size: 1.5em;
    margin-top: 20px;
  }
`

export const Regular = styled.div`
  color: black;
  font-size: 1.2em;
  line-height: 1.6;
  @media (max-width: 1000px) {
    font-size: 1.5em;
  }
  @media (max-width: 768px) {
    font-size: 1em;
  }
`
export const RegularCenter = styled(Regular)`
  display: flex;
  justify-content: center;
  margin: 0 30px;
  text-align: center;
`
export const RegularHide = styled(Regular)`
  @media (max-width: 1000px) {
    display: none;
  }
`
