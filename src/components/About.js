import React from 'react'
import { RegularWithMargin } from './typography'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  min-width: 300px;
  max-width: 800px;
  max-height: 700px;
  margin: 50px 60px;
  margin-bottom: 0;
  align-items: center;
  text-align: justify;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin-top: 40px;
    width: 100%;
    min-width: auto;
  }
  position: relative;
`

export const About = () => (
  <Container>
    <RegularWithMargin>
      Based in Berlin. Studies in Applied Mathematics, Management and Full Stack
      Development. My professional experience ranges from Online Marketing and
      Business Consulting to Software Engineering. I enjoy creating Websites
      that work well and feel good by using the latest technologies.
    </RegularWithMargin>
  </Container>
)
