import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"

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

const linkHoveredStyle = css`
  background: white;
  height: 20px;
  width: 20px;
  mix-blend-mode: difference;
`

const CursorRoot = styled.div`
  height: 15px;
  width: 15px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid white;
  position: absolute;
  border-radius: 50%;
  z-index: 100;
  pointer-events: none;
  transform: translate(-50%, -50%);
  ${(p) => p.linkHovered && linkHoveredStyle};

  @media (max-width: 550px) {
    display: none;
  }
`

const Cursor = () => {
  const handleLinkHoverEvents = () => {
    document.querySelectorAll("#link").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true))
      el.addEventListener("mouseout", () => setLinkHovered(false))
    })
  }

  useEffect(() => {
    handleLinkHoverEvents()
  }, [handleLinkHoverEvents])

  const { x, y } = useMousePosition()
  const [linkHovered, setLinkHovered] = useState(false)

  return <CursorRoot style={{ left: x, top: y }} linkHovered={linkHovered} />
}

export default Cursor
