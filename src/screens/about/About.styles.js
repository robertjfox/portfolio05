import styled, { keyframes, css } from "styled-components"

const leftSlideIn = keyframes`
  0% {transform: translateX(150px); opacity: 0;}
`

const leftSlideOut = keyframes`
  100% {transform: translateX(150px); opacity: 0;}
`

const rightSlideIn = keyframes`
  0% {transform: translateX(-150px); opacity: 0;}
`

const rightSlideOut = keyframes`
  100% {transform: translateX(-150px); opacity: 0;}
`

const textSlideIn = keyframes`
  0% {transform: translateY(10px); opacity: 0;}
`

const textSlideOut = keyframes`
  100% {transform: translateY(-10px); opacity: 0;}
`

export const AboutRoot = styled.div`
  display: flex;

  @media (max-width: 550px) {
    position: absolute;
    top: 100px;
  }
`

export const BracketLeft = styled.div`
  font-size: 300px;
  color: white;
  margin-right: 10px;
  margin-top: -70px;
  opacity: 0.1;
  font-family: -apple-system, BlinkMacSystemFont;
  animation-name: ${(p) => (p.theme.unmounting ? leftSlideOut : leftSlideIn)};
  animation-duration: ${(p) => (p.theme.unmounting ? 0.3 : 0.45)}s;
  animation-fill-mode: ${(p) =>
    p.theme.unmounting ? "forwards" : "backwards"};
  ${(p) => p.theme.unmounting && "animation-delay: 0.35s"};

  @media (max-width: 550px) {
    display: none;
  }
`

export const BracketRight = styled.div`
  font-size: 300px;
  color: white;
  margin-left: 10px;
  margin-top: -70px;
  opacity: 0.1;
  font-family: -apple-system, BlinkMacSystemFont;
  animation-name: ${(p) => (p.theme.unmounting ? rightSlideOut : rightSlideIn)};
  animation-duration: ${(p) => (p.theme.unmounting ? 0.3 : 0.45)}s;
  animation-fill-mode: ${(p) =>
    p.theme.unmounting ? "forwards" : "backwards"};
  ${(p) => p.theme.unmounting && "animation-delay: 0.35s"};

  @media (max-width: 550px) {
    display: none;
  }
`

export const KeyValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 550px) {
    display: none;
  }
`

export const KeyValue = styled.p`
  font-size: 1.25rem;
  margin: 10px 0;
  animation-name: ${(p) => (p.theme.unmounting ? textSlideOut : textSlideIn)};
  animation-duration: ${(p) => (p.theme.unmounting ? 0.3 : 0.45)}s;
  animation-fill-mode: ${(p) =>
    p.theme.unmounting ? "forwards" : "backwards"};
  animation-delay: ${(p) => (p.theme.unmounting ? 0 : p.index / 6 + 0.3)}s;
`

export const AboutMobile = styled.div`
  @media (min-width: 550px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  color: white;
  padding: 30px;
  max-height: 500px;
  overflow: scroll;
`

export const Headshot = styled.img`
  @media (min-width: 550px) {
    display: none;
  }
  height: 240px;
  width: 250px;
  filter: grayscale(1);
  align-self: center;
  border-radius: 7px;
  margin-bottom: 30px;
`
