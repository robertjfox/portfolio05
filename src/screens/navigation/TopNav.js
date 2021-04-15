import React from "react"
import { Fade } from "react-reveal"
import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`0% {opacity: 0}`

const TopNavRoot = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  right: 0px;
  top: 40px;
  z-index: 99;

  @media (max-width: 550px) {
    position: absolute;
    background: rgba(255, 255, 255, 0.3);
    max-width: 100vw;
    padding: 18px;
    top: 0;
    left: 0;
    justify-content: center;
    animation-name: ${fadeIn};
    animation-delay: 3s;
    animation-fill-mode: backwards;
    animation-duration: 0.3s;
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

  @media (max-width: 550px) {
    margin: 0 15px;
    font-size: 18px;
  }
`

const Line = styled.div`
  width: 100px;
  height: 2px;
  background: white;
  opacity: 0.5;

  @media (max-width: 550px) {
    display: none;
  }
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
          CODE
        </NavItem>
      </Fade>
      <Fade down delay={3400}>
        <NavItem
          onClick={() => setScreen("art")}
          selected={navSelection === "art"}
          id="link"
        >
          ART
        </NavItem>
      </Fade>
      <Fade down delay={3600}>
        <NavItem
          onClick={() => setScreen("contact")}
          selected={navSelection === "contact"}
          id="link"
        >
          CONTACT
        </NavItem>
      </Fade>
      <Fade right delay={3800}>
        <Line />
      </Fade>
    </TopNavRoot>
  )
}

export default TopNav
