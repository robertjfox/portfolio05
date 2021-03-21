import styled, { keyframes } from "styled-components"
import React from "react"
import headshot from "~/assets/images/headshot.jpg"

const avatarIn = keyframes`
  0% {transform: scale(0.7); opacity: 0;}
`

const AvatarRoot = styled.div`
  border-radius: 50%;
  height: 75px;
  width: 75px;
  position: absolute;
  top: 40px;
  left: 40px;
  animation-name: ${avatarIn};
  animation-duration: 1s;
`

export const Headshot = styled.img`
  opacity: 0.7;
  height: 100%;
  border-radius: 50%;
  filter: grayscale(1) contrast(1.25);
  transition: 0.15s ease-in;

  &:hover {
    opacity: 1;
  }
`

const Avatar = () => {
  return (
    <AvatarRoot>
      <Headshot src={headshot} />
    </AvatarRoot>
  )
}

export default Avatar
