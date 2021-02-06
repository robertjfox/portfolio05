import React, { useEffect } from 'react'
import p5 from 'p5'
import Sketch from './sketch'
import styled from 'styled-components'

const BackgroundRoot = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
`

const Background = () => {
  const ref = React.createRef()

  useEffect(() => {
      new p5(Sketch, ref.current)
  })

 return <BackgroundRoot ref={ref}/>
}

export default Background