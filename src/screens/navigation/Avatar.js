import styled from "styled-components"
import React from "react"
import headshot from "~/assets/images/headshot.jpg"

const AvatarRoot = styled.div`
  border-radius: 50%;
  height: 90px;
  width: 90px;
  position: absolute;
  top: 40px;
  left: 40px;
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
