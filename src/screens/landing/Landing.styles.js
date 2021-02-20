import styled, { keyframes } from "styled-components"
import Tilt from "react-tilt"

const containerSlideIn = keyframes`
  0% { transform: translateX(-85px);}
`

const containerSlideOut = keyframes`
  100% { transform: translateX(-85px);}
`

const charSlideIn = keyframes`
  0% { transform: translateY(100%); opacity: 0;}
  85% { transform: translateY(-10%); opacity: .85;}
`

const charSlideOut = keyframes`
  15% { transform: translateY(10%); opacity: .15;}
  100% { transform: translateY(-100%); opacity: 0;}
`

const imageSlideIn = keyframes`
  0% { transform: translateX(30%); opacity: 0;}
`

const imageSlideOut = keyframes`
  100% { transform: translateX(30%); opacity: 0;}
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
  opacity: 0.5;
  margin-right: 30px;
  filter: grayscale(1) contrast(1.25);
  border-radius: 10px;
  animation-name: ${(p) =>
    p.theme.isUnmounting ? imageSlideOut : imageSlideIn};
  animation-delay: ${(p) => (p.theme.isUnmounting ? "0s" : "2.4s")};
  animation-duration: ${(p) => (p.theme.isUnmounting ? "0.3s" : "0.6s")};
  animation-fill-mode: ${(p) =>
    p.theme.isUnmounting ? "forwards" : "backwards"};
`

export const TextCont = styled.div`
  animation-name: ${(p) =>
    p.theme.isUnmounting ? containerSlideOut : containerSlideIn};
  animation-delay: ${(p) => (p.theme.isUnmounting ? "0s" : "2.4s")};
  animation-duration: ${(p) => (p.theme.isUnmounting ? "0.3s" : "0.6s")};
  animation-fill-mode: ${(p) =>
    p.theme.isUnmounting ? "forwards" : "backwards"};
`

export const CharsCont = styled.div`
  display: flex;
  overflow: hidden;
  width: fit-content;
  position: relative;
  margin: 15px 0;
`

export const Char = styled.p`
  animation-name: ${(p) => (p.theme.isUnmounting ? charSlideOut : charSlideIn)};
  animation-delay: ${(p) =>
    (p.index / 20 + (p.theme.isUnmounting ? 0 : p.baseDelay / 1.3)) *
      (p.theme.isUnmounting ? 0.5 : 1) +
    (p.theme.isUnmounting ? 0.2 : 0)}s;
  animation-duration: ${(p) => (p.theme.isUnmounting ? "0.3s" : "0.4s")};
  animation-fill-mode: ${(p) =>
    p.theme.isUnmounting ? "forwards" : "backwards"};
  font-size: 40px;
  ${(p) => p.space && "width: 20px"};
  opacity: 0.75;
`
