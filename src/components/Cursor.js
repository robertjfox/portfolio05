import React, { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", setFromEvent)

    return () => {
      window.removeEventListener("mousemove", setFromEvent)
    }
  }, [])

  return position
}

const cursorPulse = keyframes`
    50% {background: rgba(255, 255, 255, 0.6); }
`

const CursorRoot = styled.div`
  height: 15px;
  width: 15px;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid white;
  position: absolute;
  border-radius: 50%;
  z-index: 100;
  animation-name: ${cursorPulse};
  animation-duration: 4s;
  animation-iteration-count: infinite;
`

const Cursor = () => {
  const { x, y } = useMousePosition()

  return <CursorRoot style={{ left: x, top: y }} />
}

export default Cursor
