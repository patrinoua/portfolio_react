import styled from 'styled-components'

export const H1 = styled.h1`
  margin: 50px;
  font-family: 'Quicksand', 'Arial Light', sans-serif;
  font-weight: 500;
  font-size: 2.6em;
`
export const Title = styled(H1)`
  margin-top: 140px;
  @media (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 30px;
  }
`
export const TitleHide = styled(Title)`
  @media (max-width: 768px) {
    display: none;
  }
`
export const H2 = styled.h2`
  margin: 50px;
  font-family: 'Quicksand', 'Arial Light', sans-serif;
  font-weight: 500;
  font-size: 2em;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5em;
    margin: 30px;
    margin-bottom: 10px;
  }
`

export const Regular = styled.div`
  color: black;
  font-size: 1.2em;
  line-height: 1.6;
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
  @media (max-width: 768px) {
    display: none;
  }
`
