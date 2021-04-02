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

  @media (max-width: 550px) {
    position: absolute;
  }
`

const NavItem = styled.p`
  margin-right: 30px;
  opacity: 0.5;
  transition: 0.15s ease-in;
  ${(p) => p.selected && "opacity: 1;"}

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

const TopNav = ({ setScreen, navSelection }) => {
  return (
    <TopNavRoot>
      <Fade down delay={3000}>
        <NavItem
          onClick={() => setScreen("about")}
          selected={navSelection === "about"}
          id="link"
        >
          ABOUT
        </NavItem>
      </Fade>
      <Fade down delay={3200}>
        <NavItem
          onClick={() => setScreen("work")}
          selected={navSelection === "work"}
          id="link"
        >
          WORK
        </NavItem>
      </Fade>
      <Fade down delay={3400}>
        <NavItem
          onClick={() => setScreen("contact")}
          selected={navSelection === "contact"}
          id="link"
        >
          CONTACT
        </NavItem>
      </Fade>
      <Fade right delay={3600}>
        <Line />
      </Fade>
    </TopNavRoot>
  )
}

export default TopNav
