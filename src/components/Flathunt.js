import React from 'react'
import styled from 'styled-components'
import { H1 } from './typography'

const Box = styled.div`
  height: 50vh;
  width: 50%;
  background: yellow;
`
const FlatHunt = () => {
  return (
    <div
      style={{
        // background: 'purple',
        height: '100vh',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          background: 'whitesmoke',
        }}
      >
        <H1 style={{ margin: 0, padding: 10, fontSize: '2em' }}>FLATHUNT</H1>
        <img src='assets/eyeBlack.png' style={{ height: 30 }} />
      </div>

      <div
        style={{
          display: 'flex',
          width: '100%',
          flexShrink: 0,
          flexWrap: 'wrap',
        }}
      >
        <Box style={{ background: 'yellow' }}>
          <H1>Me</H1>
        </Box>
        <Box style={{ background: 'orange' }}>
          <H1>Dream Flat</H1>
        </Box>
        <Box style={{ background: 'purple' }}>hi</Box>
        <Box style={{ background: 'pink' }}>hi</Box>
        {/* <div style={{ height: '50vh', width: '50%', background: 'yellow' }}>
          hi
        </div>
        <div style={{ height: '50vh', width: '50%', background: 'orange' }}>
          hi
        </div>
        <div style={{ height: '50vh', width: '50%', background: 'green' }}>
          hi
        </div> */}
      </div>
    </div>
  )
}

export default FlatHunt
