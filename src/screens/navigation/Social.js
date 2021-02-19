import React from "react"
import { Fade } from "react-reveal"
import contact from "~/assets/social/contact.png"
import github from "~/assets/social/github.png"
import linkedin from "~/assets/social/linkedin.png"
import styled from "styled-components"

const SocialRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0px;
  left: 40px;
  z-index: 99;

  & img {
    height: 25px;
    width: 25px;
    margin-bottom: 25px;
    transition: 0.15s ease-in;
    opacity: 0.5;

    &:hover {
      transform: scale(1.1);
      opacity: 1;
    }
  }
`

const Line = styled.div`
  height: 100px;
  width: 2px;
  background: white;
  opacity: 0.5;
`

const Social = () => {
  return (
    <SocialRoot>
      <Fade left delay={4000}>
        <a
          href={`mailto:${"robertjfox94@gmail.com"}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={process.env.PUBLIC_URL + contact} alt="contact" />
        </a>
      </Fade>
      <Fade left delay={4200}>
        <a
          href="https://github.com/robertjfox"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={process.env.PUBLIC_URL + github} alt="contact" />
        </a>
      </Fade>
      <Fade left delay={4400}>
        <a
          href="https://www.linkedin.com/in/robert-fox-1b341996/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={process.env.PUBLIC_URL + linkedin} alt="contact" />
        </a>
      </Fade>
      <Fade up delay={4600}>
        <Line />
      </Fade>
    </SocialRoot>
  )
}

export default Social
