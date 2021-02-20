import React from "react"
import { Fade } from "react-reveal"
import styled from "styled-components"

const TopNavRoot = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  right: 0px;
  top: 40px;
  z-index: 99;
`

const NavItem = styled.p`
  margin-right: 30px;
  opacity: 0.5;
  transition: 0.15s ease-in;

  &:hover {
    opacity: 1;
  }
`

const Line = styled.div`
  width: 100px;
  height: 2px;
  background: white;
  opacity: 0.5;
`

const TopNav = ({ setScreen }) => {
  return (
    <TopNavRoot>
      <Fade down delay={3000}>
        <NavItem onClick={() => setScreen("about")}>ABOUT</NavItem>
      </Fade>
      <Fade down delay={3200}>
        <NavItem onClick={() => setScreen("work")}>WORK</NavItem>
      </Fade>
      <Fade down delay={3400}>
        <NavItem onClick={() => setScreen("contact")}>CONTACT</NavItem>
      </Fade>
      <Fade right delay={3600}>
        <Line />
      </Fade>
    </TopNavRoot>
  )
}

export default TopNav
