import styled, { keyframes } from "styled-components"
import Tilt from "react-tilt"

const charContainerSlide = keyframes`
  0% { transform: translateX(-85px);}
`

const charSlide = keyframes`
  0% { transform: translateY(100%); opacity: 0;}
  85% { transform: translateY(-10%); opacity: .85;}
`

const imageSlide = keyframes`
  0% { transform: translateX(30%); opacity: 0;}
`

export const TiltContainer = styled(Tilt)`
  position: absolute;
  height: 200vh;
  width: 200vw;
  top: -50vh;
  left: -50vw;
`

export const LandingRoot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  transform: translateX(-50%) translateY(-50%);
  height: 200px;
`

export const HeadshotCont = styled.div`
  height: 100%;
`

export const Headshot = styled.img`
  height: 100%;
  margin-right: 30px;
  filter: grayscale(1);
  border-radius: 10px;
  animation-name: ${imageSlide};
  animation-delay: 3.2s;
  animation-duration: 0.6s;
  animation-fill-mode: backwards;
`

export const TextCont = styled.div`
  animation-name: ${charContainerSlide};
  animation-delay: 3.2s;
  animation-duration: 0.6s;
  animation-fill-mode: backwards;
`

export const CharsCont = styled.div`
  display: flex;
  overflow: hidden;
  width: fit-content;
  position: relative;
  margin: 15px 0;
`

export const Char = styled.p`
  animation-name: ${charSlide};
  animation-delay: ${(p) => p.delay / 20 + p.baseDelay}s;
  animation-duration: 0.4s;
  animation-fill-mode: backwards;
  font-size: 40px;
  /* margin-bottom: 3vh; */
  ${(p) => p.space && "width: 20px"}
`
